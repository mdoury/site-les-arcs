import './index.scss'

import * as React from 'react'

import {
  DatoCmsFullWidthImage,
  DatoCmsHomepage,
  DatoCmsOneColumnSection,
  DatoCmsTwoColumnSection,
} from '../interfaces/gatsby-graphql.interface'
import { Link, graphql } from 'gatsby'

import GatsbyImage from 'gatsby-image'
import Header from '../components/Header'
import Layout from '../components/Layout'

export interface IndexPageProps {
  data: {
    homePage: DatoCmsHomepage
  }
}

export type IndexPageContent = DatoCmsOneColumnSection | DatoCmsTwoColumnSection | DatoCmsFullWidthImage
export default class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const homePage = this.props.data.homePage
    return (
      <Layout>
        <Header title={homePage.title} image={homePage.headerImage} height="100vh" />
        {homePage.content &&
          homePage.content.map((content: IndexPageContent) => {
            if (content.model.apiKey === 'one_column_section') {
              const section = content as DatoCmsOneColumnSection
              return (
                <section key={section.id} className="one-column-section">
                  {section.headerImage ? (
                    <Header title={section.title} image={section.headerImage} height="400px" />
                  ) : (
                    <h2>{section.title}</h2>
                  )}
                  <article
                    className="column"
                    dangerouslySetInnerHTML={{
                      __html: section.contentNode.childMarkdownRemark.html,
                    }}
                  />
                </section>
              )
            }
            if (content.model.apiKey === 'two_column_section') {
              const section = content as DatoCmsTwoColumnSection
              return (
                <section key={section.id} className="two-column-section">
                  <Header title={section.title} image={section.headerImage} height="400px" />
                  <div className="two-colum-wrapper">
                    <article
                      className="column"
                      dangerouslySetInnerHTML={{
                        __html: section.firstColumnContentNode.childMarkdownRemark.html,
                      }}
                    />
                    <article
                      className="column"
                      dangerouslySetInnerHTML={{
                        __html: section.secondColumnContentNode.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                </section>
              )
            }
            if (content.model.apiKey === 'full_width_image') {
              const section = content as DatoCmsFullWidthImage
              return (
                <section key={section.id} className="full-width-image">
                  {section.image && (
                    <GatsbyImage alt={section.image.alt} fluid={section.image.fluid} style={{ height: `400px` }} />
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
