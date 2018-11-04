import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import DatoRemarkImages from './DatoRemarkImages'
import './Layout.scss'

export default class Layout extends React.Component<{ children: any }> {
  public render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            datoCmsSite {
              name
              internalDomain
              locale
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.datoCmsSite.name}
              meta={[{ name: `description`, content: data.datoCmsSite.name }, { name: `keywords`, content: `` }]}
            >
              <html lang={data.datoCmsSite.locale} />
            </Helmet>
            <DatoRemarkImages>
              <div
                className="children-wrapper"
                style={{
                  margin: `0 auto`,
                }}
              >
                {children}
              </div>
            </DatoRemarkImages>
          </>
        )}
      />
    )
  }
}
