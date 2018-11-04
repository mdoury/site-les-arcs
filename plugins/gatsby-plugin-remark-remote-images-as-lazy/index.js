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

    const imageClass = `gatsby-resp-image-image`
    const imageStyle = `position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 0.5s ease 0.5s;`

    // Construct new image node w/ aspect ratio placeholder
    let rawHTML = `
  <div class="hero--cover gatsby-image-wrapper" style="position: relative; overflow: hidden;">
    <div style="padding-bottom: ${ratio};"></div>
    <img 
      alt="${node.alt ? node.alt : defaultAlt}"
      src="${fluidResult.base64}" 
      style="${imageStyle}" />
      <img
        class="${imageClass} lazy"
        style="${imageStyle}"
        alt="${node.alt ? node.alt : defaultAlt}"
        title="${node.title ? node.title : ``}"
        data-src="${fallbackSrc}"
        data-srcset="${fluidResult.srcSet}"
        sizes="${fluidResult.sizes}"
      />
  </div>
  `
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
