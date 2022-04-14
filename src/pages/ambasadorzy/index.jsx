import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { AiOutlineForm } from 'react-icons/ai';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';
import { ambassadors } from '../../constants/ambassadors';
import listaAmbasadorow from '../../images/lista_ambasadorow.png';

import './Ambassador.scss';

export default function Ambassador({ data }) {
    const heroImage = getImage(data.heroImage);
    console.log(ambassadors);
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
                        href="https://forms.gle/8en6jMugSQqJ3a347"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineForm />
                        Formularz kontaktowy
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
