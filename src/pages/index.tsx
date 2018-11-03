import './index.scss'

import * as React from 'react'

import {
  Alignment,
  Button,
  Card,
  Classes,
  Elevation,
  H2,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'
import {
  DatoCmsFullWidthImage,
  DatoCmsHomepage,
  DatoCmsOneColumnSection,
  DatoCmsTwoColumnSection,
  UnionContentNode_2,
} from '../interfaces/gatsby-graphql.interface'
import { Link, graphql } from 'gatsby'

import GatsbyImage from 'gatsby-image'
import Header from '../components/Header'
import { IconNames } from '@blueprintjs/icons'
import Layout from '../components/Layout'

export interface IndexPageProps {
  data: {
    homePage: DatoCmsHomepage
  }
}

export type IndexPageContent = UnionContentNode_2

export default class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const homePage = this.props.data.homePage
    return (
      <Layout>
        <Header title={homePage.title!} image={homePage.headerImage!} height="100vh" />
        <Navbar className="nav-bar">
          <NavbarGroup align={Alignment.CENTER} className="nav-bar">
            <Link to="/">
              <NavbarHeading className="nav-bar-heading">Les Arcs</NavbarHeading>
            </Link>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon={IconNames.HOME} text="Duplex" />
            <Button className={Classes.MINIMAL} icon={IconNames.MAP_MARKER} text="Accès" />
            <Button className={Classes.MINIMAL} icon={IconNames.PHONE} text="Contact" />
          </NavbarGroup>
        </Navbar>
        {homePage.content &&
          homePage.content.map((content: IndexPageContent | null) => {
            if (content && content.model && content.model.apiKey === 'one_column_section') {
              const section = content as DatoCmsOneColumnSection
              return (
                <Card key={section.id} className="one-column-section">
                  {section.headerImage ? (
                    <Header title={section.title!} image={section.headerImage} height="400px" />
                  ) : (
                    <H2>{section.title}</H2>
                  )}
                  <article
                    className="column"
                    dangerouslySetInnerHTML={{
                      __html: section.contentNode!.childMarkdownRemark!.html!,
                    }}
                  />
                </Card>
              )
            }
            if (content && content.model && content.model.apiKey === 'two_column_section') {
              const section = content as DatoCmsTwoColumnSection
              return (
                <Card key={section.id} elevation={Elevation.TWO} className="two-column-section">
                  <Header title={section.title} image={section.headerImage} height="400px" />
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
            if (content && content.model && content.model.apiKey === 'full_width_image') {
              const section = content as DatoCmsFullWidthImage
              return (
                <section key={section.id} className="full-width-image">
                  {section.image && (
                    <GatsbyImage alt={section.image.alt!} fluid={section.image.fluid!} style={{ height: `400px` }} />
                  )}
                </section>
              )
            }
            return undefined
          })}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query getHomepage {
    homePage: datoCmsHomepage {
      title
      headerImage {
        alt
        fluid(maxWidth: 2048, imgixParams: { fm: "jpg", auto: "compress", crop: "faces,edges" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        ... on DatoCmsOneColumnSection {
          id
          title
          headerImage {
            alt
            fluid(maxWidth: 2048, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          contentNode {
            childMarkdownRemark {
              html
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsTwoColumnSection {
          id
          title
          headerImage {
            alt
            fluid(maxWidth: 2048, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          firstColumnContentNode {
            childMarkdownRemark {
              html
            }
          }
          secondColumnContentNode {
            childMarkdownRemark {
              html
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsFullWidthImage {
          id
          image {
            alt
            fluid(maxWidth: 2048, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`
