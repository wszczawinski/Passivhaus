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

    const { data: blogs } = await graphql(`
        query Blogs {
            allWpPost(sort: { date: DESC }) {
                nodes {
                    slug
                    date(formatString: "YYYY-MM-DD")
                }
            }
        }
    `);

    blogs.allWpPost.nodes.forEach(node => {
        actions.createPage({
            path: '/blog/' + node.date + '/' + node.slug,
            component: path.resolve('./src/templates/blog-template.tsx'),
            context: { slug: node.slug },
        });
    });
};
