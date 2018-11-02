export const createPagesQuery = `
query createPagesQuery {
  allArtist {
    edges {
      node {
        id
        name
        slug
        picture {
          id
          handle
          width
          height
        }
        records {
          id
          slug
          title
        }
      }
    }
  }
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
        tracks {
          id
          title
          aliasedLength
        }
        cover {
          handle
        }
        reviews {
          id
          slug
          title
        }
      }
    }
  }
  allReview {
    edges {
      node {
        id
        slug
        createdAt
        record {
          slug
          title
          artist {
            slug
            name
          }
        }
        title
        review
        rating
        comments {
          body
        }
      }
    }
  }
}`;
