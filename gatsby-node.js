const { resolve } = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            format
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  result.data.allWordpressPost.edges.forEach(edge => {
    boundActionCreators.createPage({
      path: edge.node.slug,
      component: resolve('./src/components/post.js'),
      context: {
        id: edge.node.id
      }
    })
  })
}
