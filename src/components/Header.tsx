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

const Header = ({ title, image, height }: HeaderProps) => (
  <section className="hero-section" style={{ height }}>
    {image && <GatsbyImage className="hero--cover" alt={image.alt!} fluid={image.fluid!} style={{ height }} />}
    <div className="hero--text-wrapper">
      <H1 className="hero--title">{title}</H1>
    </div>
  </section>
)

export default Header
