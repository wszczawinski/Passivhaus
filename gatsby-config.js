/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `news`,
                path: `${__dirname}/src/news/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `events`,
                path: `${__dirname}/src/events/`,
            },
        },
    ],

    siteMetadata: {
        title: 'Passivhaus',
        description: 'Portfolio website',
    },
};
