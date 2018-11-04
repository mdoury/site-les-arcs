import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { ModularContent } from '../components/ModularContent/ModularContent'
import { DatoCmsHomepage, UnionContentNode_2 } from '../interfaces/gatsby-graphql.interface'
import './index.scss'

export interface IndexPageProps {
  data: {
    homePage: DatoCmsHomepage
  }
}
export default class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const homePage = this.props.data.homePage
    return (
      <Layout>
        <Header title={homePage.title} critical={true} image={homePage.headerImage} height="100vh" />
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
        {homePage.content && <ModularContent content={homePage.content} headerImageHeight="300px" />}
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
        fluid(maxWidth: 2048, imgixParams: { fm: "jpg", auto: "compress" }) {
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
