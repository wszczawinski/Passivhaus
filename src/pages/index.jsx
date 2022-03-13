import React from 'react';
import { graphql, Link } from 'gatsby';
import { Announcements, Layout, News } from '../components';
import { heroText } from '../constants/heroContent';
import heroImage from '../images/heroImages/hero_home.svg';
import './News.scss';

export default function Home({ data }) {
    const news = data.news.nodes;
    const sortByDateNews = news.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <h1 className='news-container__title'>Aktualności</h1>
            <section className='news-container__content'>
                {sortByDateNews.map(element => (
                    <News singleNews={element} />
                ))}
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
                            gatsbyImageData(placeholder: BLURRED, width: 600)
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
