const visit = require(`unist-util-visit`)
// TODO Remove lodash dependencies
const { sortBy, minBy, defaults } = require(`lodash`)
const Promise = require(`bluebird`)
const sharp = require('sharp')
const request = require('request-promise-native')

module.exports = ({ markdownAST, pathPrefix, reporter }, pluginOptions) => {
  // TODO Use roporter to report errors and achievements
  // TODO Remove unnecessary plugin options
  const defaultProps = {
    maxWidth: 650,
    wrapperStyle: ``,
    backgroundColor: `white`,
    linkImagesToOriginal: true,
    showCaptions: false,
    pathPrefix,
    withWebp: false,
  }
  // TODO Use plugin options
  const options = defaults(pluginOptions, defaultProps)

  // TODO Legacy: Replace with simple visit function (without parents)
  const markdownImageNodes = []
  visit(markdownAST, `image`, node => {
    markdownImageNodes.push({ node })
  })

  const extractMetaData = async pipeline => {
    const maxWidth = 2048
    const { width, height, format } = await pipeline.metadata()
    const aspectRatio = width / height
    const displayWidth = Math.min(maxWidth, width)
    const displayHeight = Math.round(displayWidth / aspectRatio)
    return {
      aspectRatio,
      format,
      height,
      displayHeight,
      displayWidth,
      width,
    }
  }

  const createDatoCmsFluidImages = (url, width, originalWidth, aspectRatio) => {
    const sizes = [width * 3, width * 2, width * 1.5, width, width / 2, width / 3, width / 4]
      .map(Math.round)
      .filter(width => width < originalWidth)
    sizes.push(originalWidth)
    return sortBy(sizes).map(size => ({
      width: size,
      src: `${url}?auto=compress&fit=crop&fm=jpg&h=${Math.round(size / aspectRatio)}&w=${size}`,
    }))
  }

  const createImageProps = (url, displayWidth, width, aspectRatio, format) => {
    const images = createDatoCmsFluidImages(url, displayWidth, width, aspectRatio)
    return {
      sizes: `(max-width: ${displayWidth}px) 100vw, ${displayWidth}px`,
      src: minBy(images, image => Math.abs(displayWidth - image.width)).src,
      srcSet: images.map(image => `${image.src} ${image.width}w`).join(`,\n`),
      srcSetType: `image/${format}`,
    }
  }

  const createBase64Thumbnail = async (pipeline, width, aspectRatio) => {
    const height = Math.max(1, width / aspectRatio)
    const [buffer, info] = await pipeline.resize({ width, height }).toBufferAsync()
    return `data:image/${info.format};base64,${buffer.toString('base64')}`
  }

  const generateFluidImages = async ({ url, alt, title, reporter }) => {
    const imageBuffer = await request({ url, encoding: null })
    const pipeline = sharp(imageBuffer)
    const { width, format, aspectRatio, displayWidth, displayHeight } = await extractMetaData(pipeline)
    const base64 = await createBase64Thumbnail(pipeline, 20, aspectRatio)
    const { sizes, src, srcSet, srcSetType } = createImageProps(url, displayWidth, width, aspectRatio, format)
    return {
      alt,
      aspectRatio,
      base64,
      originalSrc: url,
      displayWidth,
      displayHeight,
      sizes,
      src,
      srcSet,
      srcSetType,
      title,
    }
  }
  const imgTag = ({ alt, className, dataSrc, src, style, title }) => `
  <img 
    ${alt ? `alt="${alt}"` : ``}
    ${className ? `class="${className}"` : ``}
    ${dataSrc ? `data-src="${dataSrc}"` : ``}
    ${src ? `src="${src}"` : ``}
    ${style ? `style="${style}"` : ``}
    ${title ? `title="${title}"` : ``}
    />`

  const pictureTag = ({ className, style, children }) => `
  <picture 
    ${className ? `class="${className}"` : ``}
    ${style ? `style="${style}"` : ``}>
    ${children.join('\n')}
  </picture>`

  const sourceTag = ({ className, srcSet, dataSrcSet, sizes }) => `
  <source 
    ${className ? `class="${className}"` : ``}
    ${srcSet ? `srcset="${srcSet}"` : ``}
    ${dataSrcSet ? `data-srcset="${dataSrcSet}"` : ``}
    ${sizes ? `sizes="${sizes}"` : ``} />`

  // TODO Factorize (createPictureTag, createImageTag, createPictureTagStyle, createImageTagStyle, createDefaultAltTag)
  const generateHtmlTag = ({
    alt,
    aspectRatio,
    base64,
    originalSrc,
    displayWidth,
    displayHeight,
    sizes,
    src,
    srcSet,
    srcSetType,
    title,
  }) => {
    const imageClass = `gatsby-resp-image-image`
    const baseImageStyle = `position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center;`
    const imageTagStyle = `${baseImageStyle} opacity: 1; transition: opacity 0.3s ease 0.2s;`
    const pictureTagStyle = `${baseImageStyle} opacity: 0; transition: opacity 0.5s ease 0s;`
    const ratio = `${(1 / aspectRatio) * 100}%`

    if (!alt) {
      const srcSplit = originalSrc.split(`/`)
      const fileName = srcSplit[srcSplit.length - 1]
      const fileNameNoExt = fileName.replace(/\.[^/.]+$/, ``)
      alt = fileNameNoExt.replace(/[^A-Z0-9]/gi, ` `)
    }

    const sourceEl = sourceTag({ dataSrcSet: srcSet, sizes: sizes })
    const placeholderEl = imgTag({ alt, className: 'datocms-lazy-placeholder', src: base64, style: imageTagStyle })
    const imageEl = imgTag({
      alt,
      className: imageClass,
      dataSrc: src,
      style: imageTagStyle,
      title: title || alt,
    })
    const noScriptImageEl = imgTag({
      alt,
      className: imageClass,
      src,
      style: imageTagStyle,
      title: title || alt,
    })

    return `
  <div class="datocms-remark-image-wrapper" style="position: relative; overflow: hidden;">
    <div style="padding-bottom: ${ratio};"></div>
    ${placeholderEl}
    ${pictureTag({
      className: 'datocms-lazy-picture',
      style: pictureTagStyle,
      children: [sourceEl, imageEl],
    })}
    <noscript>
      ${pictureTag({ children: [sourceEl, noScriptImageEl] })}
    </noscript>
  </div>
  `
  }

  const matchDatoCmsUrl = url => /^https:\/\/www\.datocms-assets\.com\/\d+\/.*\.[a-z]{3}(\?.*)?$/gi.exec(url)
  const sanitizeDatoCmsUrl = ([url, args]) => {
    const idx = url.indexOf(args)
    if (idx !== -1) {
      return url.slice(0, idx)
    }
    return url
  }
  const checkDatoCmsNode = node => {
    try {
      node.url = sanitizeDatoCmsUrl(matchDatoCmsUrl(node.url))
      return node
    } catch (error) {
      console.error(error)
      throw new Error(`Couldn't match image url: ${node.url}.\n${error}`)
    }
  }

  return Promise.all(
    markdownImageNodes.map(
      ({ node }) =>
        new Promise(async (resolve, reject) => {
          const fileType = node.url.slice(-3)
          const datoCmsNode = checkDatoCmsNode(node)
          if (datoCmsNode && fileType !== `gif` && fileType !== `svg`) {
            const rawHTML = await generateHtmlTag(await generateFluidImages(datoCmsNode))
            if (rawHTML) {
              datoCmsNode.type = `html`
              datoCmsNode.value = rawHTML
            }
            return resolve(datoCmsNode)
          } else {
            // Not an optimizable image served from DatoCMS...
            return resolve()
          }
        })
    )
  ).then(markdownImageNodes => markdownImageNodes.filter(node => !!node))
}
