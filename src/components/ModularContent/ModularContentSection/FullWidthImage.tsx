import GatsbyImage from 'gatsby-image'
import * as React from 'react'
import { DatoCmsFullWidthImage } from '../../../interfaces/gatsby-graphql.interface'
export interface FullWidthImageProps {
  section: DatoCmsFullWidthImage
  imageHeight?: string
}
export class FullWidthImage extends React.Component<FullWidthImageProps> {
  public render() {
    const { section, imageHeight } = this.props
    return (
      <section key={section.id} className="full-width-image">
        {section.image && (
          <GatsbyImage alt={section.image.alt!} fluid={section.image.fluid!} style={{ height: imageHeight }} />
        )}
      </section>
    )
  }
}
