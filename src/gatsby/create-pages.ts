import * as path from 'path';

import { ArtistConnection, ArtistEdge, Query, RecordConnection, RecordEdge, ReviewConnection, ReviewEdge } from '../interfaces/gatsby-graphql.interface';

import { GatsbyCreatePages } from './gatsby-create-pages.interface';
import { createPagesQuery } from './queries/create-pages.query';

export const createPages: GatsbyCreatePages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const artistDetailPageTemplate = path.resolve(
      `./src/templates/artist-detail.tsx`
    );
    const recordDetailPageTemplate = path.resolve(
      `./src/templates/record-detail.tsx`
    );
    const reviewDetailPageTemplate = path.resolve(
      `./src/templates/review-detail.tsx`
    );
    // const landingPageDetailPageTemplate = path.resolve(
    //   `./src/templates/landing-page.tsx`
    // );

    resolve(
      graphql(createPagesQuery).then((result: { data: Query, errors: any }) => {
        if (result.errors) {
          reject(result.errors);
        }
        const artists = result.data.allArtist;
        artists.edges.forEach((artist: ArtistEdge) => {
          const path = `artists/` + artist.node.slug;
          createPage({
            path,
            component: artistDetailPageTemplate,
            context: {
              id: artist.node.id
            }
          });
        });

        const records: RecordConnection = result.data.allRecord;
        records.edges.forEach((record: RecordEdge) => {
          const path = `records/` + record.node.slug;
          createPage({
            path,
            component: recordDetailPageTemplate,
            context: {
              id: record.node.id
            }
          });
        });

        const reviews: ReviewConnection = result.data.allReview;
        reviews.edges.forEach((review: ReviewEdge) => {
          const path = `reviews/` + review.node.slug;
          createPage({
            path,
            component: reviewDetailPageTemplate,
            context: {
              id: review.node.id,
              mdid: `md-` + review.node.id
            }
          });
        });

        // const landingPages: DatoCmsLandingPageConnection = result.data.allDatoCmsLandingPage;
        // landingPages.edges.forEach((landingPage: DatoCmsLandingPageEdge) => {
        //   const path = landingPage.node.slug;
        //   createPage({
        //     path,
        //     component: landingPageDetailPageTemplate,
        //     context: {
        //       id: landingPage.node.id
        //     }
        //   });
        // });
      })
    );
  });
};
