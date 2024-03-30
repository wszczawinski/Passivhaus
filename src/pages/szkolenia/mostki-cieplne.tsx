import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout } from '@/components';
import { heroText } from '@/constants/heroContent';

import './Workshops.scss';

export default function ThermalBridges({ data }: PageProps<Queries.ThermalBridgesQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.workshopsMostki} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <h2>Więcej informacji wkrótce!</h2>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query ThermalBridges {
        heroImage: file(relativePath: { eq: "heroImages/hero_workshops.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;