import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { AiOutlineForm } from 'react-icons/ai';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';
import listaAmbasadorow from '../../images/lista_ambasadorow.png';

import './Ambassador.scss';

export default function Ambassador({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.ambassador}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <div className="ambasador__main-container">
                    <Link to="/ambasadorzy/lista-ambasadorow">
                        <img src={listaAmbasadorow} alt="" />
                    </Link>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSepV9lsiuSdgigihEfUKW0tGyuwLWEIyCj8Q7taWLMAUmkTlw/viewform?embedded=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineForm />
                        DOŁĄCZ | JOIN
                    </a>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query AmbQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_ambassador.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
