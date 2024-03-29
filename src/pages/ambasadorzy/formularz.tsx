import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout } from '@/components';
import { heroText } from '@/constants/heroContent';

import './Ambassador.scss';

export default function AmbassadorForm({ data }: PageProps<Queries.AmbassadorFormQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.ambassadorFormularz} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="layout-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus quidem quisquam similique quis reprehenderit dolore necessitatibus
                sed repellendus laborum itaque iure voluptatibus eum nostrum, minus architecto maxime! Voluptatem modi itaque eius ut dolorem, fuga porro sunt
                totam pariatur laborum tempore sapiente praesentium aliquid ipsum quas ex cum recusandae odio.
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query AmbassadorForm {
        heroImage: file(relativePath: { eq: "heroImages/hero_ambassador.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
