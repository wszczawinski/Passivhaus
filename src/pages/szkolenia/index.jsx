import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, ContainerColumn } from '../../components';
import { heroText } from '../../constants/heroContent';

import phpp from '../../images/workshops/phpp1.png';

import './Workshops.scss';

export default function Workshops({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.workshopsPhpp}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerColumn
                    textStart={
                        <p>
                            Instytut Budownictwa Pasywnego będzie oferował trzy dni warsztatów w
                            języku angielskim z PHPP Podstawy, designPH i PHPP 9 od 11. do 13.
                            listopada 2015 r. Grupą docelową tych warsztatów są przede wszystkim
                            architekci, inżynierowie, konsultanci energetyczni, osoby pracujące w
                            branży budowlanej itp., którzy mają podstawową wiedzę na temat
                            efektywności energetycznej w budynkach lub koncepcji budownictwa
                            pasywnego. Każdy warsztat ma indywidualną rezerwację.
                        </p>
                    }
                    imgSrc={phpp}
                    textEnd={
                        <p>
                            <h4> Dzień 1: PHPP Podstawy / 11. listopada 2015:</h4>
                            Warsztaty z PHPP Podstawy adresowane są do ludzi, którzy są
                            zainteresowani nabyciem podstawowej wiedzy z zakresu znajomości Pakietu
                            Planowania Budynku Pasywnego (PHPP), narzędzi bilansu energetycznego i
                            planowania wydajnych budynków i modernizacji.
                            <h4>Treść warsztatów:</h4>
                            <p>
                                1. Obliczanie bilansu energetycznego z PHPP <br />
                                2. Wdrożenie powierzchni i okien <br />
                                3. Wdrożenie czynników cieniowania <br />
                                4. Wdrożenie strategii wentylacji <br />
                                5. Wdrożenie w zakresie zaopatrzenia w ciepłą wodę, zużycia energii
                                elektrycznej i ogrzewania
                            </p>
                        </p>
                    }
                    alt="phpp"
                    shortBorder
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query WorkQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_workshops.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
