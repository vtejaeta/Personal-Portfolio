/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "http://localhost:8000/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `/assets/images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `Poppins\:400,500,600`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Viswa Teja E. personal Portfolio",
        short_name: "Viswa Teja",
        start_url: "/",
        icon: "src/assets/images/profile-pic-round.png",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-csp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-robots-txt",
  ],
}
