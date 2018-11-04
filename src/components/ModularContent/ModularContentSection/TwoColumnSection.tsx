import { Card, Elevation } from '@blueprintjs/core'
import * as React from 'react'
import { DatoCmsTwoColumnSection } from '../../../interfaces/gatsby-graphql.interface'
import Header from '../../Header'
export interface TwoColumnSectionProps {
  section: DatoCmsTwoColumnSection
  headerHeight: string
}
export class TwoColumnSection extends React.Component<TwoColumnSectionProps> {
  public render() {
    const { section, headerHeight } = this.props
    return (
      <Card key={section.id} elevation={Elevation.TWO} className="two-column-section">
        {section.headerImage && <Header title={section.title} image={section.headerImage} height={headerHeight} />}
        <div className="two-colum-wrapper">
          <article
            className="column"
            dangerouslySetInnerHTML={{
              __html: section.firstColumnContentNode!.childMarkdownRemark!.html!,
            }}
          />
          <article
            className="column"
            dangerouslySetInnerHTML={{
              __html: section.secondColumnContentNode!.childMarkdownRemark!.html!,
            }}
          />
        </div>
      </Card>
    )
  }
}
