import React from 'react';
import { Layout } from '../components';

import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function BlogPost({ data }) {
    const { html } = data.markdownRemark;
    const { title, date, featuredImage, slug } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <section className="layout-content">
                <h2>{title}</h2>
                <span>{date}</span>
                <div>
                    <GatsbyImage image={getImage(featuredImage)} alt={slug} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </section>
        </Layout>
    );
}

export const query = graphql`
    query BlogPost($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                slug
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, width: 500)
                    }
                }
                title
                date
            }
            html
        }
    }
`;
