import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

export default function Contact({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.instytutKontakt}
            heroClass={'hero__subpage'}
            heroBackgroundImage={heroImage}
        >
            <section className="layout-content">
                <div className="team">
                    <p>
                        <strong>Polski Instytut Budownictwa Pasywnego i Energii Odnawialnej imienia Güntera
                        Schlagowskiego NON-PROFIT Sp. z o.o.</strong>
                        <ul>
                            <li> ul. Homera 55 80-299 GDAŃSK (Osowa)</li>
                            <li>
                                Numer KRS: 0000219538 VII Wydział Gospodarczy KRS, Gdańsk-Północ
                            </li>
                            <li>Kapitał zakładowy 360.000 PLN</li>
                            <li>REGON 193102200</li>
                            <li>NIP PL 2040000444</li>
                        </ul>
                    </p>

                    <p>
                        <strong>Sekretariat:</strong>
                        <ul>
                            <li>Tel.: +48 58 524 12 00</li>
                            <li> Fax: +48 / 58 522 98 50</li>
                            <li> E-mail: pibp@pibp.pl</li>
                        </ul>
                    </p>
                    <p>
                        <strong>Księgowość:</strong>
                        <ul>
                            <li>Tel.: +48 58 524 12 06 E-mail: h.fiuczek@pibp.pl</li>
                            <li>Konto PL: Nr konta: 05 1140 1065 0000 3335 8600 1001</li>
                            <li> Konto EU: Nr konta: 05 1140 1065 0000 3335 8600 1002</li>
                        </ul>
                    </p>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query InstQuery1 {
        heroImage: file(relativePath: { eq: "heroImages/hero_contact.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
