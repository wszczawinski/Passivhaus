import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

import './Workshops.scss';

export default function MostkiCieplne({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.workshopsMostki}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Mostki</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query WorkQuery2 {
        heroImage: file(relativePath: { eq: "heroImages/hero_workshops.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
