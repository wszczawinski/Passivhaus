import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

import './Workshops.scss';

export default function ProjektantDoradztwo({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.workshopsProjektant}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Doradztwo</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>

                <Button textContent={'Workshops button'} />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query WorkQuery4 {
        heroImage: file(relativePath: { eq: "heroImages/hero_cephd.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
