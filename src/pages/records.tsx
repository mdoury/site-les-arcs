import * as React from 'react'

import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

class RecordPage extends React.Component<any> {
  public render() {
    const records = this.props.data.allRecord.edges
    return (
      <Layout>
        <section className="records" style={{ textAlign: `center` }}>
          <h1>Records</h1>
          <nav>
            <ul
              style={{
                listStyle: `none`,
                margin: `0 0 2rem`,
                display: `flex`,
                flexWrap: `wrap`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `100%`,
              }}
            >
              {records.map(({ node }, i) => (
                <li
                  key={`${node.id}nav`}
                  style={{
                    marginBottom: `0.5rem`,
                    width: `128px`,
                    flexBasis: `128px`,
                  }}
                >
                  <Link
                    to={`/records/${node.slug}`}
                    style={{
                      textDecoration: `none`,
                    }}
                  >
                    <figure>
                      <img
                        src={`https://media.graphcms.com/resize=w:224,h:224,a:top,fit:crop/${node.cover.handle}`}
                        alt={node.title}
                        title={node.title}
                        width="112"
                        style={{
                          marginBottom: `0`,
                          marginTop: `0.125rem`,
                        }}
                      />
                      <figcaption>
                        <h6
                          style={{
                            marginBottom: `0.125rem`,
                            marginTop: `0`,
                            fontSize: `0.5675rem`,
                          }}
                        >
                          {node.title}
                        </h6>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </Layout>
    )
  }
}

export default RecordPage

export const RecordPageQuery = graphql`
  query getAllRecords {
    allRecord {
      edges {
        node {
          id
          slug
          title
          artist {
            id
            slug
            name
          }
          cover {
            handle
          }
        }
      }
    }
  }
`
