import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

import './Literature.scss';

export default function Wyszukiwarka({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.literatureWyszukiwarka}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Wyszukiwarka literatury</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>

                <Button textContent={'Literature button'} />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query LitQuery1 {
        heroImage: file(relativePath: { eq: "heroImages/hero_literature.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;