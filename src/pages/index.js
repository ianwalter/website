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
        {node.format === 'link' ? (
          <a href={node.acf.external_link} target="_blank">
            <h3>{node.title}</h3>
          </a>
        ) : (
          <Link to={node.slug}>
            <h3>{node.title}</h3>
          </Link>
        )}
      </div>
    ))}
  </p>
)
