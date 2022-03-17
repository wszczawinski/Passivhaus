import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

export default function ListaBudynkow({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaListaBudynkow}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, ratione
                    sint! Praesentium cum eveniet consequatur recusandae? Quas iure perspiciatis
                    incidunt vitae veritatis id eos minus provident repellat quam corporis accusamus
                    ex adipisci maxime aliquam fugiat, cumque temporibus dolor eaque, harum, quos
                    laboriosam esse doloribus quibusdam. Accusamus officia explicabo ex eos.
                </p>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CertQuery3 {
        heroImage: file(relativePath: { eq: "heroImages/hero_certification.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
