// const select = require(`unist-util-select`)
const visitWithParents = require(`unist-util-visit-parents`)
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const cheerio = require(`cheerio`)
const sharp = require('sharp')
const request = require('request-promise-native')

module.exports = ({ markdownAST, pathPrefix, reporter }, pluginOptions) => {
  const defaults = {
    maxWidth: 650,
    wrapperStyle: ``,
    backgroundColor: `white`,
    linkImagesToOriginal: true,
    showCaptions: false,
    pathPrefix,
    withWebp: false,
  }

  const options = _.defaults(pluginOptions, defaults)

  // This will only work for markdown syntax image tags
  let markdownImageNodes = []
  visitWithParents(markdownAST, `image`, node => {
    markdownImageNodes.push({ node })
  })

  const lazy = async ({ src, reporter }) => {
    const imageBuffer = await request({ url: src, encoding: null })
    const pipeline = sharp(imageBuffer)

    const { width, height, format } = await pipeline.metadata()
    const aspectRatio = width / height

    const presentationWidth = Math.min(2048, width)
    const presentationHeight = Math.round(presentationWidth / aspectRatio)
    const sizes = `(max-width: ${presentationWidth}px) 100vw, ${presentationWidth}px`
    const srcSet = `${src} ${Math.round(presentationWidth)}w`
    const srcSetType = `image/${format}`

    const thumbnailWidth = 20
    const thumbnailHeight = Math.max(1, 20 / aspectRatio)
    const [buffer, info] = await pipeline.resize({ width: thumbnailWidth, height: thumbnailHeight }).toBufferAsync()
    const base64 = `data:image/${info.format};base64,${buffer.toString('base64')}`

    return {
      base64,
      aspectRatio,
      src,
      srcSet,
      srcSetType,
      sizes,
      presentationWidth,
      presentationHeight,
    }
  }

  // Takes a node and generates the needed images and then returns
  // the needed HTML replacement for the image
  const generateImagesAndUpdateNode = async function(node) {
    const fluidResult = await lazy({ src: node.url })

    // Calculate the paddingBottom %
    const ratio = `${(1 / fluidResult.aspectRatio) * 100}%`

    const fallbackSrc = fluidResult.src
    const presentationWidth = fluidResult.presentationWidth

    // Generate default alt tag
    const srcSplit = node.url.split(`/`)
    const fileName = srcSplit[srcSplit.length - 1]
    const fileNameNoExt = fileName.replace(/\.[^/.]+$/, ``)
    const defaultAlt = fileNameNoExt.replace(/[^A-Z0-9]/gi, ` `)

    // TODO
    // Fade in images on load.
    // https://www.perpetual-beta.org/weblog/silky-smooth-image-loading.html

    const imageClass = `gatsby-resp-image-image`
    const imageStyle = `width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px ${
      options.backgroundColor
    };`

    // Create our base image tag
    let imageTag = `
      <img
        class="${imageClass} lazy"
        style="${imageStyle}"
        alt="${node.alt ? node.alt : defaultAlt}"
        title="${node.title ? node.title : ``}"
        data-src="${fallbackSrc}"
        data-srcset="${fluidResult.srcSet}"
        sizes="${fluidResult.sizes}"
      />
    `

    // Construct new image node w/ aspect ratio placeholder
    const showCaptions = options.showCaptions && node.title
    let rawHTML = `
  <span
    class="gatsby-resp-image-wrapper"
    style="position: relative; display: block; ${
      showCaptions ? `` : options.wrapperStyle
    } max-width: ${presentationWidth}px; margin-left: auto; margin-right: auto;"
  >
    <span
      class="gatsby-resp-image-background-image"
      style="padding-bottom: ${ratio}; position: relative; bottom: 0; left: 0; background-image: url('${
      fluidResult.base64
    }'); background-size: cover; display: block;"
    >${imageTag}</span>
  </span>
  `

    // Wrap in figure and use title as caption
    if (showCaptions) {
      rawHTML = `
  <figure class="gatsby-resp-image-figure" style="${options.wrapperStyle}">
  ${rawHTML}
  <figcaption class="gatsby-resp-image-figcaption">${node.title}</figcaption>
  </figure>
      `
    }

    return rawHTML
  }

  return Promise.all(
    // Simple because there is no nesting in markdown
    markdownImageNodes.map(
      ({ node }) =>
        new Promise(async (resolve, reject) => {
          const fileType = node.url.slice(-3)

          // Ignore gifs as we can't process them,
          // svgs as they are already responsive by definition
          if (fileType !== `gif` && fileType !== `svg`) {
            const rawHTML = await generateImagesAndUpdateNode(node)

            if (rawHTML) {
              // Replace the image node with an inline HTML node.
              node.type = `html`
              node.value = rawHTML
            }
            return resolve(node)
          } else {
            // Image isn't relative so there's nothing for us to do.
            return resolve()
          }
        })
    )
  ).then(markdownImageNodes => markdownImageNodes.filter(node => !!node))
}
