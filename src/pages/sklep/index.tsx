import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout, ShopItem, PriceTag } from '@/components';
import { heroText } from '@/constants/heroContent';
import { shopItems } from '@/constants/shopItems';
import packages from '@/images/sklep/package.svg';

import './Literature.scss';

export default function Literature({ data }: PageProps<Queries.LiteratureQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.literatureNarzedzia} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <div className="shop-items-list">
                    {shopItems.map((shopItem, index) => (
                        <ShopItem
                            key={index}
                            img={shopItem.img}
                            alt={shopItem.title}
                            title={shopItem.title}
                            description={shopItem.description}
                            price={shopItem.price}
                        />
                    ))}
                </div>
                <h3 className="shop-items-h3">KOSZTY DOSTAWY:</h3>
                <img src={packages} alt="Koszty dostawy" className="package" />
                <PriceTag />
            </section>
        </Layout>
    );
}

export const query = graphql`
    query Literature {
        heroImage: file(relativePath: { eq: "heroImages/hero_literature.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
