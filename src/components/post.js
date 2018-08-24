import React from 'react'

export const pageQuery = graphql`
  query wordpressPost ($id: String!) {
    wordpressPost (id: { eq: $id }) {
      title
      content
    }
  }
`

export default ({ data }) => (
  <article className="mt-5">
    <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </article>
)
