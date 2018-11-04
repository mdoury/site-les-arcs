import * as React from 'react'
import {
  DatoCmsFullWidthImage,
  DatoCmsOneColumnSection,
  DatoCmsTwoColumnSection,
} from '../../interfaces/gatsby-graphql.interface'
import { OneColumnSection } from './ModularContentSection/OneColumnSection'
import { TwoColumnSection } from './ModularContentSection/TwoColumnSection'
import { FullWidthImage } from './ModularContentSection/FullWidthImage'

export type ModularContentSection = DatoCmsOneColumnSection | DatoCmsTwoColumnSection | DatoCmsFullWidthImage | null
export interface ModularContentProps {
  content: ModularContentSection[]
  headerImageHeight?: string
  imageHeight?: string
}
export class ModularContent extends React.Component<ModularContentProps> {
  public render() {
    const { content, imageHeight = '400px', headerImageHeight = '400px' } = this.props
    return content.map(section => {
      if (section && section.model) {
        switch (section.model.apiKey) {
          case 'one_column_section':
            return (
              <OneColumnSection
                key={section.id}
                section={section as DatoCmsOneColumnSection}
                headerHeight={headerImageHeight}
              />
            )
          case 'two_column_section':
            return (
              <TwoColumnSection
                key={section.id}
                section={section as DatoCmsTwoColumnSection}
                headerHeight={headerImageHeight}
              />
            )
          case 'full_width_image':
            return (
              <FullWidthImage key={section.id} section={section as DatoCmsFullWidthImage} imageHeight={imageHeight} />
            )
          default:
            break
        }
      }
      return undefined
    })
  }
}
