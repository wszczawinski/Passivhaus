import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout, NewsPost } from '@/components';
import { heroText } from '@/constants/heroContent';

import './News.scss';

export default function Home({ data }: PageProps<Queries.HomeQuery>) {
    const news = data.news.nodes;
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <section className="home-container">
                <div className="news-container">
                    <h3>Aktualności</h3>
                    <div className="news-container__content">
                        {news.map(element => (
                            <NewsPost singleNews={element} key={element.id} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query Home {
        heroImage: file(relativePath: { eq: "heroImages/hero_home_new.jpeg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
        news: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { type: { eq: "news" } } }) {
            nodes {
                frontmatter {
                    date
                    slug
                    title
                    content
                    thumb {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, width: 1100)
                        }
                    }
                    imageLink
                    youtubeLink
                }
                html
                id
            }
        }
        events: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { type: { eq: "events" } } }) {
            nodes {
                frontmatter {
                    date
                    slug
                    title
                }
                id
            }
        }
    }
`;
