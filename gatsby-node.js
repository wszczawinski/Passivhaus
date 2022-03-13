const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
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

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/blog/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/blog-post.jsx'),
            context: { slug: node.frontmatter.slug },
        });
    });
};
