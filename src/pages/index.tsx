import * as React from 'react';

import { DatoCmsHomepage, DatoCmsOneColumnSection, DatoCmsTwoColumnSection } from '../interfaces/gatsby-graphql.interface';
import { Link, graphql } from 'gatsby';

import Header from '../components/header';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export interface IndexPageProps {
  data: {
    homePage: DatoCmsHomepage;
  };
}
export default class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const homePage = this.props.data.homePage;
    return (
      <Layout>
        <Header title={ homePage.title } image={ homePage.headerImage } height="100vh" />
        { homePage.content && homePage.content.map(content => {
            if (content.model.apiKey === 'one_column_section') {
              const section = content as DatoCmsOneColumnSection;
              return (
                <section key={section.id}>
                  { section.headerImage
                    ? <Header title={section.title} image={section.headerImage} height="400px"></Header>
                    : <h2>{ section.title }</h2>
                  }
                  <article dangerouslySetInnerHTML={{
                    __html: section.contentNode.childMarkdownRemark.html
                  }} />
                </section>
              )
            } else if (content.model.apiKey === 'two_column_section') {
              const section = content as DatoCmsTwoColumnSection;
              return (
                <section key={section.id}>
                  { section.headerImage
                    ? <Header title={section.title} image={section.headerImage} height="400px"></Header>
                    : <h2>{ section.title }</h2>
                  }
                  <div className="two-colum-wrapper">
                    <article dangerouslySetInnerHTML={{
                      __html: section.firstColumnContentNode.childMarkdownRemark.html
                    }} />
                    <article dangerouslySetInnerHTML={{
                      __html: section.secondColumnContentNode.childMarkdownRemark.html
                    }} />
                  </div>
                </section>
              )
            }
        })}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query getHomepage {
    homePage: datoCmsHomepage {
      title
      headerImage {
        fluid(
          maxWidth: 2048
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        ... on DatoCmsOneColumnSection {
          id
          title
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
      }
    }
  }
`;
