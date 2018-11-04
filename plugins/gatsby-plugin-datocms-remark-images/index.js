const visitWithParents = require(`unist-util-visit-parents`)
const { sortBy, minBy, defaults } = require(`lodash`)
const Promise = require(`bluebird`)
const sharp = require('sharp')
const request = require('request-promise-native')

module.exports = ({ markdownAST, pathPrefix, reporter }, pluginOptions) => {
  const defaultProps = {
    maxWidth: 650,
    wrapperStyle: ``,
    backgroundColor: `white`,
    linkImagesToOriginal: true,
    showCaptions: false,
    pathPrefix,
    withWebp: false,
  }

  const options = defaults(pluginOptions, defaultProps)

  // This will only work for markdown syntax image tags
  let markdownImageNodes = []
  visitWithParents(markdownAST, `image`, node => {
    markdownImageNodes.push({ node })
  })

  const generateFluidImages = async ({ url, alt, title, reporter }) => {
    const imageBuffer = await request({ url, encoding: null })
    const pipeline = sharp(imageBuffer)

    const { width, height, format } = await pipeline.metadata()
    const aspectRatio = width / height

    const maxWidth = 2048
    const presentationWidth = Math.min(maxWidth, width)
    const presentationHeight = Math.round(presentationWidth / aspectRatio)
    const sizes = `(max-width: ${presentationWidth}px) 100vw, ${presentationWidth}px`

    const fluidSizes = [presentationWidth]
    fluidSizes.push(presentationWidth / 4)
    fluidSizes.push(presentationWidth / 2)
    fluidSizes.push(presentationWidth * 1.5)
    fluidSizes.push(presentationWidth * 2)
    fluidSizes.push(presentationWidth * 3)

    const filteredSizes = fluidSizes.filter(size => size < width)
    filteredSizes.push(width)
    const sortedSizes = sortBy(filteredSizes)
    const images = sortedSizes.map(size => {
      const roundedSize = Math.round(size)
      return {
        width: roundedSize,
        src: `${url}?auto=compress&fit=crop&fm=jpg&h=${Math.round(size / aspectRatio)}&w=${roundedSize}`,
      }
    })
    const fallbackSrc = minBy(images, image => Math.abs(presentationWidth - image.width)).src

    const srcSet = images.map(image => `${image.src} ${Math.round(image.width)}w`).join(`,\n`)
    const srcSetType = `image/${format}`

    const thumbnailWidth = 20
    const thumbnailHeight = Math.max(1, 20 / aspectRatio)
    const [buffer, info] = await pipeline.resize({ width: thumbnailWidth, height: thumbnailHeight }).toBufferAsync()
    const base64 = `data:image/${info.format};base64,${buffer.toString('base64')}`

    return {
      alt,
      aspectRatio,
      base64,
      originalSrc: url,
      presentationWidth,
      presentationHeight,
      src: fallbackSrc,
      srcSet,
      srcSetType,
      sizes,
      title,
    }
  }

  const generateHtmlTag = fluid => {
    // Calculate the paddingBottom %
    const ratio = `${(1 / fluid.aspectRatio) * 100}%`

    // Generate default alt tag
    if (!fluid.alt) {
      const srcSplit = fluid.originalSrc.split(`/`)
      const fileName = srcSplit[srcSplit.length - 1]
      const fileNameNoExt = fileName.replace(/\.[^/.]+$/, ``)
      fluid.alt = fileNameNoExt.replace(/[^A-Z0-9]/gi, ` `)
    }

    const imageClass = `gatsby-resp-image-image`
    const baseImageStyle = `position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center;`
    const imageTagStyle = `${baseImageStyle} opacity: 1; transition: opacity 0.3s ease 0.2s;`
    const pictureTagStyle = `${baseImageStyle} opacity: 0; transition: opacity 0.5s ease 0s;`

    // Construct new image node w/ aspect ratio placeholder
    let rawHTML = `
  <div class="datocms-remark-image-wrapper" style="position: relative; overflow: hidden;">
    <div style="padding-bottom: ${ratio};"></div>
    <img class="datocms-lazy-placeholder"
      alt="${fluid.alt}"
      src="${fluid.base64}" 
      style="${imageTagStyle}" />
    <picture class="datocms-lazy-picture" 
      style="${pictureTagStyle}">
      <source
        data-srcset="${fluid.srcSet}"
        sizes="${fluid.sizes}">
      </source>
      <img
        class="${imageClass}"
        alt="${fluid.alt}"
        title="${fluid.title || fluid.alt}"
        data-src="${fluid.src}" />
    </picture>
  </div>
  `
    return rawHTML
  }

  const checkDatoCmsNode = node => {
    try {
      let [
        datoCmsAssetUrl,
        datoCmsAssetArgumentString,
      ] = /^https:\/\/www\.datocms-assets\.com\/\d+\/.*\.[a-z]{3}(\?.*)?$/gi.exec(node.url)
      if (datoCmsAssetUrl) {
        if (datoCmsAssetArgumentString && datoCmsAssetArgumentString.length) {
          const argumentStringIndex = datoCmsAssetUrl.indexOf(datoCmsAssetArgumentString)
          if (argumentStringIndex !== -1) {
            datoCmsAssetUrl = datoCmsAssetUrl.slice(0, argumentStringIndex)
          }
        }
        node.url = datoCmsAssetUrl
        return node
      } else {
        return undefined
      }
    } catch (error) {
      console.error(error)
      throw new Error(`Couldn't match image url: ${datoCmsAssetUrl}.\n${error}`)
    }
  }

  return Promise.all(
    // Simple because there is no nesting in markdown
    markdownImageNodes.map(
      ({ node }) =>
        new Promise(async (resolve, reject) => {
          const fileType = node.url.slice(-3)

          // Ignore gifs as we can't process them,
          // svgs as they are already responsive by definition
          const datoCmsNode = checkDatoCmsNode(node)
          if (datoCmsNode && fileType !== `gif` && fileType !== `svg`) {
            const rawHTML = await generateHtmlTag(await generateFluidImages(datoCmsNode))

            if (rawHTML) {
              // Replace the image node with an inline HTML node.
              datoCmsNode.type = `html`
              datoCmsNode.value = rawHTML
            }
            return resolve(datoCmsNode)
          } else {
            // Image isn't served from DatoCMS...
            return resolve()
          }
        })
    )
  ).then(markdownImageNodes => markdownImageNodes.filter(node => !!node))
}
