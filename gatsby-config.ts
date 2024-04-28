import path from 'path';
const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');
const siteUrl = `https://www.pibp.pl`;

module.exports = {
    siteMetadata: {
        title: `Passivhaus`,
        description: 'Portfolio website',
        siteUrl,
    },
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
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
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: `https://blog.pibp.pl/index.php?graphql`,
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public'],
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
                  allSitePage {
                    nodes {
                      path
                    }
                  }
                  allWpPost {
                    nodes {
                        slug
                        date(formatString: "YYYY-MM-DD")
                        modified(formatString: "YYYY-MM-DD")
                        categories {
                            nodes {
                              name
                            }
                          }
                    }
                    
                  }
                  allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
                    nodes {
                        frontmatter {
                            slug
                            date
                        }
                    }
                }
                }
              `,
                resolvePages: ({ allSitePage: { nodes: allSitePages }, allWpPost: { nodes: newsWpNodes }, allMarkdownRemark: { nodes: allMdNodes } }) => {
                    const blogPostsPages = newsWpNodes.map(node => ({
                        ...node,
                        slug: '/' + node.categories.nodes[0].name + '/' + node.date + '/' + node.slug + '/',
                    }));

                    const mdPostsPages = allMdNodes.map(node => ({
                        ...node.frontmatter,
                        slug: '/news/' + node.frontmatter.slug + '/',
                        modified: node.frontmatter.date,
                    }));

                    return allSitePages.map(page => ({
                        ...page,
                        ...blogPostsPages.find(p => p.slug === page.path),
                        ...mdPostsPages.find(p => p.slug === page.path),
                    }));
                },
                resolveSiteUrl: () => siteUrl,
                serialize: ({ modified, slug, path }) => {
                    if (modified) {
                        return {
                            url: slug,
                            lastmod: modified,
                            priority: 0.7,
                            changefreq: 'daily',
                        };
                    } else {
                        return {
                            url: path,
                            priority: 0.5,
                            changefreq: 'daily',
                        };
                    }
                },
            },
        },
    ],
};
