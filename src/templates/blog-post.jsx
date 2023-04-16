import React from 'react';
import { Layout } from '../components';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import './blogPost.scss';

export default function BlogPost({ data }) {
    const heroImage = getImage(data.heroImage);
    const { html } = data.markdownRemark;
    const { title, featuredImage, slug } = data.markdownRemark.frontmatter;

    const handleClick = () => {
        if (slug === 'cepht-news' || slug === 'news-campaigne') {
            const href = slug === 'news-campaigne' ? 'http://tiny.cc/oczekujacy-cephd01' : 'https://szkolenia.akademiazdrowegobudownictwa.pl/mistrz-budownictwa-pasywnego/?utm_source=facebook&utm_medium=r1_pibp&utm_campaign=mbpie0323';
            const link = document.createElement('a');
			link.href = href;
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			link.remove();
        }
    }

    const displayTitle = <p>{title}</p>;
    return (
        <Layout heroTextContent={displayTitle} heroBackgroundImage={heroImage}>
            <section className="news">
                <div className="news-content">
                    <div onClick={handleClick}>
                        <GatsbyImage
                            image={getImage(featuredImage)}
                            alt={slug}
                        />
                    </div>
                    <div
                        className="news-content__text"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
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
        heroImage: file(relativePath: { eq: "heroImages/hero_home.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1900)
            }
        }
    }
`;
