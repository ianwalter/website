import React from 'react'
import Link from 'gatsby-link'
import format from 'date-fns/format'
import parse from 'date-fns/parse'

import LinkIcon from '-!svg-react-loader?name=LinkIcon!../assets/link.svg'
import WriteIcon from '-!svg-react-loader?name=WriteIcon!../assets/write.svg'

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost (sort: { fields: [date], order: DESC }) {
      edges {
        node {
          date
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
          <div style={{ marginLeft: '62px' }}>

            <div className="mb-3">
              <small className="text-secondary">
                {format(parse(node.date), 'MMMM D, YYYY')}
              </small>
            </div>

            {node.format === 'link' ? (
              <div>

                <h3>
                  <a
                    href={node.acf.external_link}
                    target="_blank">

                    <div className="icon">
                      <LinkIcon />
                    </div>

                    <span dangerouslySetInnerHTML={{ __html: node.title }} />

                  </a>
                </h3>

                <div
                  className="content mt-3"
                  dangerouslySetInnerHTML={{ __html: node.content }} />

              </div>
            ) : (
              <div>
                <h3>
                  <Link to={node.slug}>

                    <div className="icon">
                      <WriteIcon />
                    </div>

                    <span dangerouslySetInnerHTML={{ __html: node.title }} />

                  </Link>
                </h3>
                <div
                  className="content mt-3"
                  dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  </div>
)
