import { Card, Elevation } from '@blueprintjs/core'
import * as React from 'react'
import { DatoCmsOneColumnSection } from '../../../interfaces/gatsby-graphql.interface'
import Header from '../../Header'
export class OneColumnSection extends React.Component<{ section: DatoCmsOneColumnSection; headerHeight: string }> {
  public render() {
    const { section, headerHeight } = this.props
    return (
      <Card elevation={Elevation.TWO} className="one-column-section">
        {section.headerImage && <Header title={section.title} image={section.headerImage} height={headerHeight} />}
        <div className="one-colum-wrapper">
          <article
            className="column"
            dangerouslySetInnerHTML={{
              __html: section.contentNode!.childMarkdownRemark!.html!,
            }}
          />
        </div>
      </Card>
    )
  }
}
