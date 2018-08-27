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
  <div className="p-4">
    <div className="container">
      {data.allWordpressPost.edges.map(({ node }) => (
        <article className="py-3" key={node.slug}>
          {node.format === 'link' ? (
            <div>
              <h3>
                <a
                  href={node.acf.external_link} target="_blank"
                  dangerouslySetInnerHTML={{ __html: node.title }} />
              </h3>
              <div
                className="content mt-3"
                dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>
          ) : (
            <div>
              <h3>
                <Link
                  to={node.slug}
                  dangerouslySetInnerHTML={{ __html: node.title }} />
              </h3>
              <div
                className="content mt-3"
                dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )}
        </article>
      ))}
    </div>
  </div>
)
