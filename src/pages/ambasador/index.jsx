import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

import './Ambassador.scss';

export default function Ambassador({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.ambassadorText}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Ambasador</h2>
                <p>
                    Ambasadorzy Budownictwa Pasywnego to grupa firm z różnych sektorów branży
                    budowlanej, które wprowadzają innowacje na Polski rynek w postaci komponentów i
                    systemów budowlanych zalecanych do stosowania w budynkach pasywnych oraz
                    świadczą usługi projektowania i budowy takich obiektów w oparciu o kryteria
                    budownictwa pasywnego według najwyższych standardów opracowanych przez
                    Passivhaus Institut Darmstadt.
                </p>

                <Button textContent={'Ambasador button'} />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query AmbQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_ambassador.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1900)
            }
        }
    }
`;
