import * as React from 'react'
interface References {
  placeholder: HTMLImageElement
  picture: HTMLPictureElement
}

export default class DatoRemarkImages extends React.Component<{ children: JSX.Element; className?: string }> {
  private io: IntersectionObserver | null = null
  private childrenWrapper: HTMLElement | null = null
  private references: References[] = []

  private findReferenceByPlaceholder = (placeholder: HTMLElement): References | undefined =>
    this.references.find(ref => ref.placeholder === placeholder)
  private insertPictureElement = (placeholder: HTMLElement, picture: HTMLPictureElement): void => {
    placeholder.parentElement!.insertBefore(picture, placeholder.nextSibling)
  }
  private triggerImageLoad = (sources: HTMLSourceElement[], image: HTMLImageElement): void => {
    image.src = image.dataset.src!
    image.removeAttribute('data-src')
    sources.map(source => {
      source.srcset = source.dataset.srcset!
      source.removeAttribute('data-srcset')
      return source
    })
  }
  private getPictureChildrenElements = (
    picture: HTMLPictureElement
  ): { sources: HTMLSourceElement[]; image: HTMLImageElement } => ({
    sources: Array.from(picture.querySelectorAll('source')),
    image: picture.querySelector('img')!,
  })
  private handleImageLoad = (picture: HTMLPictureElement, placeholder: HTMLImageElement) => () => {
    picture.style.opacity = `1`
    placeholder.style.opacity = `0`
    return true
  }
  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        if (entry.target instanceof HTMLImageElement) {
          const { picture, placeholder } = this.findReferenceByPlaceholder(entry.target)!
          if (picture) {
            this.insertPictureElement(placeholder, picture)
            const { sources, image } = this.getPictureChildrenElements(picture)
            if (sources && image) {
              image.onload = this.handleImageLoad(picture, placeholder)
              this.triggerImageLoad(sources, image)
            }
          }
        }
        if (this.io) {
          this.io.unobserve(entry.target)
        }
      }
    }
  }
  private getInnerDatoLazyPictures = (parent: HTMLElement) =>
    Array.from(parent.querySelectorAll('picture.datocms-lazy-picture')) as HTMLPictureElement[]

  private getSiblingDatoLazyPlaceholder = (pictures: HTMLPictureElement[]) =>
    pictures.map(
      (picture: HTMLPictureElement) =>
        picture &&
        picture.parentElement &&
        (picture.parentElement.querySelector('img.datocms-lazy-placeholder') as HTMLImageElement)
    )

  private setupLazyLoading = (placeholder: HTMLImageElement | null, picture: HTMLPictureElement) => {
    if (this.io && placeholder) {
      this.io.observe(placeholder)
      this.references.push({ placeholder, picture })
      picture.remove()
    }
  }
  public componentDidMount = () => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    this.io = new IntersectionObserver(this.handleIntersection, { rootMargin: '200px' })
    if (this.childrenWrapper) {
      const lazyPictures = this.getInnerDatoLazyPictures(this.childrenWrapper)
      const lazyPlaceholders = this.getSiblingDatoLazyPlaceholder(lazyPictures)
      lazyPictures.forEach((picture: HTMLPictureElement, idx: number) => {
        this.setupLazyLoading(lazyPlaceholders[idx], picture)
      })
    }
  }

  public componentWillUnmount() {
    if (this.io) {
      this.io.disconnect()
    }
  }

  public render() {
    const { children, className } = this.props
    return (
      <div
        className={`lazy-loading-wrapper ${className || ''}`}
        ref={ref => {
          this.childrenWrapper = ref!
        }}
      >
        {children}
      </div>
    )
  }
}
