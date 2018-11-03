import * as React from 'react'

export default class LazyLoading extends React.Component<{ children: JSX.Element; className?: string }> {
  private io: IntersectionObserver | null = null
  private childrenWrapper: HTMLElement | null = null
  public componentDidMount = () => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    if (this.childrenWrapper) {
      const images = Array.from(this.childrenWrapper.getElementsByTagName('img')).filter((image: HTMLImageElement) =>
        image.classList.contains('lazy')
      )
      for (const image of images) {
        // image.dataset.src = image.src
        // image.dataset.srcset = image.srcset
        // image.removeAttribute('src')
        // image.removeAttribute('srcset')
        image.style.visibility = 'hidden'
      }

      this.io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              if (entry.target instanceof HTMLImageElement) {
                const image = entry.target
                image.src = image.dataset.src!
                image.srcset = image.dataset.srcset!
                image.style.visibility = 'visible'
                if (this.io) {
                  this.io.unobserve(image)
                }
              }
            }
          }
        },
        { rootMargin: '0px' }
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
