import * as path from 'path'

import {
  ArtistConnection,
  ArtistEdge,
  Query,
  RecordConnection,
  RecordEdge,
  ReviewConnection,
  ReviewEdge,
} from '../interfaces/gatsby-graphql.interface'

import { GatsbyCreatePages } from './gatsby-create-pages.interface'
import { createPagesQuery } from './queries/create-pages.query'

export const createPages: GatsbyCreatePages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const artistDetailPageTemplate = path.resolve(`./src/templates/artist-detail.tsx`)
    const recordDetailPageTemplate = path.resolve(`./src/templates/record-detail.tsx`)
    const reviewDetailPageTemplate = path.resolve(`./src/templates/review-detail.tsx`)
    // const landingPageDetailPageTemplate = path.resolve(
    //   `./src/templates/landing-page.tsx`
    // );

    resolve(
      graphql(createPagesQuery).then((result: { data: Query; errors: any }) => {
        if (result.errors) {
          reject(result.errors)
        }
        const artists: ArtistConnection | null | undefined = result.data.allArtist
        if (artists && artists.edges) {
          artists.edges.forEach((artist: ArtistEdge | null) => {
            if (artist && artist.node) {
              const artistPagePath = `artists/${artist.node.slug}`
              createPage({
                path: artistPagePath,
                component: artistDetailPageTemplate,
                context: {
                  id: artist.node.id,
                },
              })
            }
          })
        }

        const records: RecordConnection | null | undefined = result.data.allRecord
        if (records && records.edges) {
          records.edges.forEach((record: RecordEdge | null) => {
            if (record && record.node) {
              const recordPagePath = `records/${record.node.slug}`
              createPage({
                path: recordPagePath,
                component: recordDetailPageTemplate,
                context: {
                  id: record.node.id,
                },
              })
            }
          })
        }

        const reviews: ReviewConnection | null | undefined = result.data.allReview
        if (reviews && reviews.edges) {
          reviews.edges.forEach((review: ReviewEdge | null) => {
            if (review && review.node) {
              const reviewPagePath = `reviews/${review.node.slug}`
              createPage({
                path: reviewPagePath,
                component: reviewDetailPageTemplate,
                context: {
                  id: review.node.id,
                  mdid: `md-${review.node.id}`,
                },
              })
            }
          })
        }
      })
    )
  })
}
