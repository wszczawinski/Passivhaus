import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

export default function Weryfikatorzy({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaWeryfikatorzy}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <p>
                    Następujący eksperci zostali międzynarodowo akredytowani przez Instytut
                    Budownictwa Pasywnego (PHI) do certyfikowania w imieniu PHI budynków na całym
                    świecie zgodnie z normami budownictwa pasywnego i modernizacji EnerPHit.
                    arch.mgr.inz.Lukasz Smol arch.mgr.inż Tomasz Pyszczek dr. Andrzej Górka
                    arch.mgr.inż Marcin Stelmach arch.mgr.inż Cezary Sankowski
                </p>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CertQuery5 {
        heroImage: file(relativePath: { eq: "heroImages/hero_certification.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1900)
            }
        }
    }
`;
