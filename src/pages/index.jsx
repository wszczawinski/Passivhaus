import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, News, Schedule } from '../components';
import { heroText } from '../constants/heroContent';
import { trainingSchedule } from '../constants/trainingSchedule';

import './News.scss';

export default function Home({ data }) {
    const news = data.news.nodes;
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <section className="home-container">
                <aside className="aside-container">
                    <Schedule dates={trainingSchedule} title="Projektant budownictwa pasywnego" />
                </aside>
                <div className="news-container">
                    <h1 className="news-container__title">Aktualności</h1>
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
        heroImage: file(relativePath: { eq: "heroImages/hero_home.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2500)
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
                    thumb {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, width: 700)
                        }
                    }
                }
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
