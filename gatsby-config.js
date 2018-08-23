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
        baseUrl: 'ianwalter.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret: process.env.CLIENT_SECRET,
          wpcom_app_clientId: '62989',
          wpcom_user: 'ianwalter',
          wpcom_pass: process.env.USER_PASS,
        },
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        }
      }
    }
  ]
}
