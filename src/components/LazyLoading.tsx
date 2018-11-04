import * as React from 'react'
import GatsbyImage from 'gatsby-image'

export default class LazyLoading extends React.Component<{ children: JSX.Element; className?: string }> {
  private io: IntersectionObserver | null = null
  private childrenWrapper: HTMLElement | null = null
  private observers: { placeholder: HTMLImageElement; picture: HTMLPictureElement }[] = []
  public componentDidMount = () => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    this.io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const placeholder = entry.target
            if (placeholder instanceof HTMLImageElement) {
              const matchingObserver = this.observers.find(obs => obs.placeholder === placeholder)
              if (matchingObserver) {
                const picture = matchingObserver.picture
                if (picture) {
                  placeholder.parentElement!.insertBefore(picture, placeholder.nextSibling)
                  const sources = Array.from(picture.querySelectorAll('source'))
                  const image = picture.querySelector('img')
                  if (sources && image) {
                    image.onload = () => {
                      picture.style.opacity = `1`
                      placeholder.style.opacity = `0`
                    }
                    image.src = image.dataset.src!
                    image.removeAttribute('data-src')
                    sources.map(source => {
                      source.srcset = source.dataset.srcset!
                      source.removeAttribute('data-srcset')
                      return source
                    })

                    if (this.io) {
                      this.io.unobserve(placeholder)
                    }
                  }
                }
              }
            }
          }
        }
      },
      { rootMargin: '200px' }
    )

    if (this.childrenWrapper) {
      const pictures = Array.from(this.childrenWrapper.getElementsByTagName('picture'))
      const lazyPictures = pictures.filter((picture: HTMLPictureElement) => picture.classList.contains('lazy'))
      const lazyPlaceholders = lazyPictures.map(
        (picture: HTMLPictureElement) =>
          picture &&
          picture.parentElement &&
          (picture.parentElement.querySelector('img.lazy-placeholder') as HTMLImageElement)
      )
      lazyPictures.forEach((picture: HTMLPictureElement, idx: number) => {
        const placeholder = lazyPlaceholders[idx]
        if (placeholder && this.io) {
          this.observers.push({ placeholder, picture })
          picture.remove()
          this.io.observe(placeholder)
        }
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
