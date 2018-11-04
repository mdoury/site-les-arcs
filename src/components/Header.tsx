import './Header.scss'

import * as React from 'react'

import { DatoCmsAsset } from '../interfaces/gatsby-graphql.interface'
import GatsbyImage from 'gatsby-image'
import { H1 } from '@blueprintjs/core'

export interface HeaderProps {
  image?: DatoCmsAsset | null
  title?: string | null
  height?: string
  critical?: boolean
}

export default class Header extends React.Component<HeaderProps> {
  public render() {
    const { title, image, height, critical = false } = this.props
    return (
      <section className="hero-section" style={{ height }}>
        {image && (
          <GatsbyImage
            className="hero--cover"
            critical={critical}
            alt={image.alt!}
            fluid={image.fluid!}
            style={{ height }}
          />
        )}
        {title && (
          <div className="hero--text-wrapper">
            <H1 className="hero--title">{title}</H1>
          </div>
        )}
      </section>
    )
  }
}
