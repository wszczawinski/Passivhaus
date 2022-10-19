import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, News } from '../components';
import { heroText } from '../constants/heroContent';

import './News.scss';

export default function Home({ data }) {
    const news = data.news.nodes;
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <section className="home-container">
                <div className="news-container">
                    <h3><u>AKTUALNOŚCI</u></h3>
                    <div className="news-container__content">
                        {news.map(element => (
                            <News singleNews={element} key={element.id} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query HomeQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_home_new.jpeg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
        news: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { type: { eq: "news" } } }
        ) {
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
                }
                html
                id
            }
        }
        events: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { type: { eq: "events" } } }
        ) {
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
