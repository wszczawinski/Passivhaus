import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout, Post } from '@/components';
import { heroText } from '@/constants/heroContent';

import '../News.scss';

export default function Blog({ data }: PageProps<Queries.BlogQuery>) {
    const blogs = data.blog.nodes;
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.blog} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="home-container">
                <div className="news-container">
                    <h3>Blog</h3>
                    <div className="news-container__content">
                        {blogs.map(blog => (
                            <Post singleNews={blog} key={blog.id} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query Blog {
        heroImage: file(relativePath: { eq: "heroImages/hero_blog.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
        blog: allWpPost(sort: { date: DESC }, filter: { categories: { nodes: { elemMatch: { name: { eq: "blog" } } } } }) {
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
