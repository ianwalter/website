import React from 'react'
import Link from 'gatsby-link'

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost (sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          format
          content
          excerpt
          slug
          acf {
            external_link
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <p className="mt-5">
    {data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.slug}>
        <Link to={node.slug}>
          <h3>{node.title}</h3>
        </Link>
      </div>
    ))}
  </p>
)
