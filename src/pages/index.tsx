import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';

import { Layout, Post } from '@/components';
import { heroText } from '@/constants/heroContent';
import { mapNewsToWPNews } from '@/helpers/mapNewsToWPNews';

import './News.scss';

export default function Home({ data }: PageProps<Queries.HomeQuery>) {
    const newsMd = data.newsMd.nodes;
    const newsWp = data.newsWP.nodes;
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <section className="home-container">
                <div className="news-container">
                    <h3>Aktualności</h3>
                    <div className="news-container__content">
                        {newsWp.map(news => (
                            <Post singleNews={news} key={news.id} />
                        ))}
                        {newsMd.map(news => (
                            <Post singleNews={mapNewsToWPNews(news)} key={news.id} />
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
        newsMd: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { type: { eq: "news" } } }) {
            nodes {
                id
                html
                frontmatter {
                    date
                    slug
                    title
                    content
                    imageLink
                    thumb {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, width: 1100)
                        }
                    }
                }
            }
        }
        newsWP: allWpPost(sort: { date: DESC }, filter: { categories: { nodes: { elemMatch: { name: { eq: "news" } } } } }) {
            nodes {
                id
                slug
                title
                content
                date(formatString: "YYYY-MM-DD")
                featuredImage {
                    node {
                        gatsbyImage(width: 1000, placeholder: BLURRED)
                    }
                }
                links {
                    youtubeLink
                    imageLink
                }
                categories {
                    nodes {
                        name
                    }
                }
            }
        }
    }
`;
