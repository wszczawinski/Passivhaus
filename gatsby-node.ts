import path from 'path';

export const onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@/components': path.resolve(__dirname, 'src/components'),
                '@/constants': path.resolve(__dirname, 'src/constants'),
                '@/helpers': path.resolve(__dirname, 'src/helpers'),
                '@/images': path.resolve(__dirname, 'src/images'),
            },
        },
    });
};

exports.createPages = async ({ graphql, actions }) => {
    const { data: news } = await graphql(`
        query News {
            allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    news.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/news/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/news-template.tsx'),
            context: { slug: node.frontmatter.slug },
        });
    });

    const { data: newsWp } = await graphql(`
        query NewsWp {
            allWpPost(sort: { date: DESC }) {
                nodes {
                    slug
                    date(formatString: "YYYY-MM-DD")
                    categories {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    `);

    newsWp.allWpPost.nodes.forEach(node => {
        const category = node.categories.nodes[0].name === 'blog' ? 'blog' : 'news';

        actions.createPage({
            path: '/' + category + '/' + node.date + '/' + node.slug,
            component: path.resolve('./src/templates/blog-template.tsx'),
            context: { slug: node.slug },
        });
    });
};
