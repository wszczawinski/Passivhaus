import React from 'react';
import { Layout } from '../components';

import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import heroImage from '../images/heroImages/hero_home.svg';

import './blogPost.scss';

export default function BlogPost({ data }) {
    const { html } = data.markdownRemark;
    const { title, date, featuredImage, slug } = data.markdownRemark.frontmatter;
    const displayDate = new Date(date).toISOString().split('T')[0]

    const displayTitle = <p>{title}</p>
    return (
        <Layout heroTextContent={displayTitle} heroBackgroundImage={heroImage}>
            <section className="news">
                <div className='news-content'>
                    <GatsbyImage image={getImage(featuredImage)} alt={slug} />
                    <div className='news-content__text' dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <span className='news__date'>Dodano: {displayDate}</span>
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
                        gatsbyImageData(placeholder: BLURRED, width: 2500)
                    }
                }
                title
                date
            }
            html
        }
    }
`;
