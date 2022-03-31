import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, ShopItem } from '../../components';
import { heroText } from '../../constants/heroContent';
import { shopItems } from '../../constants/shopItems';

import './Literature.scss';

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
                    {shopItems.map(shopItem => (
                        <ShopItem
                            img={shopItem.img}
                            alt={shopItem.title}
                            title={shopItem.title}
                            description={shopItem.description}
                            price={shopItem.price}
                        />
                    ))}
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
