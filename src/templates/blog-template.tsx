import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { Layout } from '@/components';
import { formatDate } from '@/helpers/formatDate';

import './PostTemplate.scss';

export default function BlogTemplate({ data }: PageProps<Queries.BlogTemplateQuery>) {
    const heroImage = getImage(data.heroImage);
    const { title, featuredImage, slug, links, date, content } = data.blog;

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
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                    <div className="news-content__image">
                        <a className={`${!links.imageLink && 'news-content__noLink'}`} href={links.imageLink} target="_blank" rel="noreferrer">
                            <GatsbyImage image={getImage(featuredImage?.node)} alt={slug} />
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query BlogTemplate($slug: String) {
        blog: wpPost(slug: { eq: $slug }) {
            date(formatString: "YYYY-MM-DD")
            content
            title
            slug
            featuredImage {
                node {
                    gatsbyImage(width: 1000, placeholder: BLURRED)
                }
            }
            links {
                youtubeLink
                imageLink
            }
        }
        heroImage: file(relativePath: { eq: "heroImages/hero_blog.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2000)
            }
        }
    }
`;
