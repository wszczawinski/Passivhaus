import React from 'react';
import { graphql, Link } from 'gatsby';
import { Announcements, Layout } from '../components';
import { heroText } from '../constants/heroContent';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import heroImage from '../images/heroImages/hero_home.svg';

import '../App.scss';

export default function Home({ data }) {
    const news = data.news.nodes;
    const events = data.events.nodes;

    return (
        <Layout heroTextContent={heroText.home} heroBackgroundImage={heroImage}>
            <Announcements events={events} />
            <h1>Home Page!</h1>
            <section>
                {news.map(element => (
                    <Link to={'/blog/' + element.frontmatter.slug} key={element.id}>
                        <h3>{element.frontmatter.title}</h3>
                        <p>{element.frontmatter.date}</p>
                        <GatsbyImage
                            image={getImage(element.frontmatter.thumb)}
                            alt={element.frontmatter.slug}
                        />
                    </Link>
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
                            gatsbyImageData(placeholder: BLURRED, width: 300)
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
