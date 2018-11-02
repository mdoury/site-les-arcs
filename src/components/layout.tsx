import "./layout.scss";

import * as React from "react";

import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Helmet from "react-helmet";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        datoCmsSite {
          name
          internalDomain
          locales
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.datoCmsSite.name}
          meta={[
            { name: `description`, content: data.datoCmsSite.name },
            { name: `keywords`, content: `` }
          ]}
        >
          <html lang="data.datoCmsSite.locale" />
        </Helmet>
        <div
          className="children-wrapper"
          style={{
            margin: `0 auto`
          }}
        >
          {children}
        </div>
      </>
    )}
  />
);

export default Layout;
