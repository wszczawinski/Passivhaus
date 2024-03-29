import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout, ContainerColumn } from '@/components';
import { heroText } from '@/constants/heroContent';
import phpp from '@/images/workshops/phpp1.png';

import './Workshops.scss';

export default function Workshops({ data }: PageProps<Queries.WorkshopsQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.workshopsPhpp} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <ContainerColumn textStart={<h2>Więcej informacji wkrótce!</h2>} imgSrc={phpp} imgAlt="phpp" shortBorder />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query Workshops {
        heroImage: file(relativePath: { eq: "heroImages/hero_phpp.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
