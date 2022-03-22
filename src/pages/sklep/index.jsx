import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';
import phpp from '../../images/sklep/phpp.svg';
import ogrzewanie from '../../images/sklep/ogrzewanie.svg';
import budynekPas from '../../images/sklep/bud-pas.svg';

import './Literature.scss';
import ShopItem from '../../components/ShopItem/ShopItem';

export default function Literature({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.literatureNarzedzia}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <div className="shop-items-list">
                    <ShopItem
                        img={phpp}
                        alt="Pakiet do projektowania budynków pasywnych PHPPp"
                        title="Pakiet do projektowania budynków pasywnych PHPP"
                        description="gggg"
                        price='123 zł'
                    />
                    <ShopItem img={ogrzewanie} alt="Poradnik OGRZEWANIE I KLIMATYZACJA" title="Poradnik OGRZEWANIE I KLIMATYZACJA" description="gggg" />
                    <ShopItem img={budynekPas} alt="Budownictwo Pasywne 2017" title="Budownictwo Pasywne 2017 Materiały konferencyjne" description="gggg" />
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query LitQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_literature.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
