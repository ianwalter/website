require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Ian Walter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'wp.iankwalter.com',
        protocol: 'https',
        useACF: false,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://wp.iankwalter.com',
          replacementUrl: 'https://iankwalter.com',
        }
      }
    }
  ]
}
