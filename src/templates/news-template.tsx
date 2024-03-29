import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { Layout } from '@/components';
import { formatDate } from '@/helpers/formatDate';

import './PostTemplate.scss';

export default function NewsTemplate({ data }: PageProps<Queries.NewsTemplateQuery>) {
    const heroImage = getImage(data.heroImage);
    const { html } = data.markdownRemark;
    const { title, featuredImage, slug, imageLink, date } = data.markdownRemark.frontmatter;

    const displayTitle = <p>{title}</p>;

    return (
        <Layout heroTextContent={displayTitle} heroBackgroundImage={heroImage}>
            <section className="news">
                <h3>{title}</h3>
                <div className="news-content">
                    <div className="news-content__text">
                        <p className="news-content__date">
                            <i>{formatDate(date)}</i>
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                    <div className="news-content__image">
                        <a className={`${!imageLink && 'news-content__noLink'}`} href={imageLink} target="_blank" rel="noreferrer">
                            <GatsbyImage image={getImage(featuredImage)} alt={slug} />
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query NewsTemplate($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                slug
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, width: 2000)
                    }
                }
                title
                date
                imageLink
            }
            html
        }
        heroImage: file(relativePath: { eq: "heroImages/hero_home_new.jpeg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2000)
            }
        }
    }
`;
