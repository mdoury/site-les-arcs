export const onCreateNode = ({ node, actions }) => {
    const { createNode } = actions;
    if (node.internal.type === `Review`) {
      createNode({
        id: `md-${node.id}`,
        parent: node.id,
        children: [],
        internal: {
          type: `${node.internal.type}Markdown`,
          mediaType: `text/markdown`,
          content: node.review,
          contentDigest: node.internal.contentDigest
        }
      });
    }
  };
  