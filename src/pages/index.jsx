import React from 'react';
import { graphql } from 'gatsby';
import { Layout, News, Schedule } from '../components';
import { heroText } from '../constants/heroContent';
import heroImage from '../images/heroImages/hero_home.svg';
import './News.scss';
import { trainingSchedule } from '../constants/trainingSchedule';

export default function Home({ data }) {
    const news = data.news.nodes;
    const sortByDateNews = news.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <section className="home-container">
                <aside className="aside-container">
                    <Schedule dates={trainingSchedule} title="Projektant budownictwa pasywnego" />
                    </aside>
                <div className="news-container">
                    <h1 className="news-container__title">Aktualności</h1>
                    <div className="news-container__content">
                        {sortByDateNews.map(element => (
                            <News singleNews={element} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query MyQuery {
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
