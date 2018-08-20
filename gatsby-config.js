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
    }
  ]
}
