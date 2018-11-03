import { Review } from '../interfaces/gatsby-graphql.interface'
export const onCreateNode = ({ node, actions }: { node: Review; actions: any }) => {
  const { createNode } = actions
  if (node && node.internal && node.internal.type === `Review`) {
    createNode({
      id: `md-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: `${node.internal.type}Markdown`,
        mediaType: `text/markdown`,
        content: node.review,
        contentDigest: node.internal.contentDigest,
      },
    })
  }
}
