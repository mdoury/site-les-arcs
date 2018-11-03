import './Header.scss'

import * as React from 'react'

import { DatoCmsAsset } from '../interfaces/gatsby-graphql.interface'
import GatsbyImage from 'gatsby-image'
import { H1 } from '@blueprintjs/core'

export interface HeaderProps {
  title?: string | null
  height?: string
  image?: DatoCmsAsset | null
}

export default class Header extends React.Component<HeaderProps> {
  public render() {
    const { title, image, height } = this.props
    return (
      <section className="hero-section" style={{ height }}>
        {image && <GatsbyImage className="hero--cover" alt={image.alt!} fluid={image.fluid!} style={{ height }} />}
        <div className="hero--text-wrapper">
          <H1 className="hero--title">{title}</H1>
        </div>
      </section>
    )
  }
}
