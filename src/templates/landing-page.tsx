// import './landing-page.scss';

// import * as React from "react";

// import { GatsbyQueryResults } from '../interfaces/gatsby-query-results.interface';
// import Img from 'gatsby-image';
// import Layout from '../components/layout';
// import { graphql } from 'gatsby';

// export default class LandingPageDetailPageTemplate extends React.Component<GatsbyQueryResults> {
//   render(): React.ReactNode {
//     const page = this.props.data.allDatoCmsPage;
//     return (
//       <Layout>
//         <div className="wrapper">
          
//           <section className="value-section">
//             {landingPage.valueBlocks.map(valueBlock => (
//               <article className="value-block" key={valueBlock.id}>
//                 <img className="value-block--icon"
//                   src={valueBlock.valueIcon.url}
//                   alt={valueBlock.valueTextNode.valueText}
//                 />
//                 <span className="value-block--text"
//                   dangerouslySetInnerHTML={{
//                     __html: valueBlock.valueTextNode.childMarkdownRemark.html
//                   }}
//                 />
//               </article>
//             ))}
//           </section>
//           <article className="article" key={landingPage.id}>
//           </article>
//         </div>
//       </Layout>
//     );
//   }
// }

// export const LandingPageDetailPageQuery = graphql`
//   query getLandingPageById($id: String!) {
//     datoCmsLandingPage(id: { eq: $id }) {
//       id
//       slug
//       title
//       headerImage {
//         fluid(maxWidth: 1024, imgixParams: { fm: "jpg", auto: "compress" }) {
//           ...GatsbyDatoCmsFluid
//         }
//       }
//       headerTextNode {
//         childMarkdownRemark {
//           html
//         }
//       }
//       valueBlocks {
//         id
//         valueTextNode {
//           valueText
//           childMarkdownRemark {
//             html
//           }
//         }
//         valueIcon {
//           url
//         }
//       }
//     }
//   }
// `;
