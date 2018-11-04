import * as React from 'react'
import GatsbyImage from 'gatsby-image'

export default class LazyLoading extends React.Component<{ children: JSX.Element; className?: string }> {
  private io: IntersectionObserver | null = null
  private childrenWrapper: HTMLElement | null = null
  public componentDidMount = () => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    this.io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            if (entry.target instanceof HTMLImageElement) {
              const image = entry.target
              image.onload = () => {
                image.style.visibility = `visible`
                image.style.opacity = `1`
              }
              image.src = image.dataset.src!
              image.removeAttribute('data-src')
              image.srcset = image.dataset.srcset!
              image.removeAttribute('data-srcset')

              if (this.io) {
                this.io.unobserve(image)
              }
            }
          }
        }
      },
      { rootMargin: '200px' }
    )

    if (this.childrenWrapper) {
      const images = Array.from(this.childrenWrapper.getElementsByTagName('img')).filter((image: HTMLImageElement) =>
        image.classList.contains('lazy')
      )
      for (const image of images) {
        this.io.observe(image)
      }
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
