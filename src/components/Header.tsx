import './Header.scss'

import * as React from 'react'

import { DatoCmsAsset } from '../interfaces/gatsby-graphql.interface'
import GatsbyImage from 'gatsby-image'

export interface HeaderProps {
  title?: string
  height?: string
  image?: DatoCmsAsset
}

const Header = ({ title, image, height }: HeaderProps) => (
  <section className="hero-section" style={{ height }}>
    {image && <GatsbyImage className="hero--cover" alt={image.alt} fluid={image.fluid} style={{ height }} />}
    <div className="hero--text-wrapper">
      <h1 className="hero--title">{title}</h1>
    </div>
  </section>
)

export default Header
