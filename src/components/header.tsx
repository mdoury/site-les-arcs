import './header.scss'

import * as React from 'react';

import { DatoCmsAsset } from '../interfaces/gatsby-graphql.interface';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export interface HeaderProps {
  title: string;
  height: string;
  image: DatoCmsAsset;
}

const Header = ({ title, image, height }: HeaderProps) => (
  <section className="hero-section" style={{ maxHeight: height }}>
    <Img className="hero--cover" fluid={image.fluid} alt={title} />
    <div className="hero--text-wrapper">
      <h1 className="hero--title">{title}</h1>
    </div>
  </section>
);

export default Header;
