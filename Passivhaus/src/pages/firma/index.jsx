import React from 'react';
import { graphql, Link } from 'gatsby';
import { Announcements, Button, SubpageNavbar, Layout } from '../../components';
import { firmNavItems } from '../../constants/subNavItems';
import heroFirmImage from '../../images/heroImages/hero_firma.png';
import { heroText } from '../../constants/heroContent';

import './Firm.scss';

export const query = graphql`
    query NewsPage {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    slug
                    date
                }
                id
            }
        }
    }
`;

export default function Firm({ data }) {
    const news = data.allMarkdownRemark.nodes;
    return (
        <Layout
            heroTextContent={heroText.firmText}
            heroBackgroundImage={heroFirmImage}
            heroClass={'hero__subpage'}
        >
            <Announcements />
            <SubpageNavbar navElements={firmNavItems} />
            <section className="layout-content">
                <h2>Firma</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nihil est
                    repellat consequatur quam enim! Error asperiores doloribus voluptatum eos
                    consequuntur id animi nostrum. Vel consectetur explicabo officia atque natus!
                </p>
                <section>
                    {news.map(element => (
                        <Link to={'/firm/' + element.frontmatter.slug} key={element.id}>
                            <h3>{element.frontmatter.title}</h3>
                            <p>{element.frontmatter.date}</p>
                        </Link>
                    ))}
                </section>

                <Button textContent={'Text'} />
            </section>
        </Layout>
    );
}
