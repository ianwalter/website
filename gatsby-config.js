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
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://wp.iankwalter.com',
          replacementUrl: 'https://iankwalter.com',
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/assets/
        }
      }
    }
  ]
}
