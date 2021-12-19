import React from 'react';
import { graphql, Link } from 'gatsby';
import { Announcements, Layout } from '../components';
import { heroText } from '../constants/heroContent';
import { getImage } from 'gatsby-plugin-image';

import '../App.scss';

export default function Home({ data }) {
    const heroHomeImage = getImage(data.heroImage);
    const news = data.news.nodes;
    const events = data.events.nodes;
    console.log(events)
    return (
        <Layout heroTextContent={heroText.homeText} heroBackgroundImage={heroHomeImage}>
            <Announcements />
            <h1>Home Page!</h1>
            <section>
                {news.map(element => (
                    <Link to={'/firm/' + element.frontmatter.slug} key={element.id}>
                        <h3>{element.frontmatter.title}</h3>
                        <p>{element.frontmatter.date}</p>
                    </Link>
                ))}
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query MyQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_home.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1500)
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
