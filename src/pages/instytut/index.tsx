import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout, ContainerRow, ContainerColumn, ContainerBlue } from '@/components';
import { heroText } from '@/constants/heroContent';
import oNas3 from '@/images/firm/oNas2.png';
import oNas2 from '@/images/firm/oNas3.png';
import oNas1 from '@/images/firm/inst-o_nas.jpg';
import leaf from '@/images/firm/icons/leaf.svg';

import './Firm.scss';

export default function About({ data }: PageProps<Queries.AboutQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.instytutOnas} heroClass={'hero__subpage'} heroBackgroundImage={heroImage}>
            <section className="layout-content">
                <ContainerRow
                    text={
                        <p>
                            Od 2004 roku jesteśmy niezależną polską instytucją, aktualnie działającą na zasadach non-profit. Naszym celem jest upowszechnianie
                            wiedzy o<strong>budownictwie pasywnym, zero energetycznym, plus energetycznym oraz o kompleksowej termomodernizacji</strong>z
                            wykorzystaniem technologii i komponentów pasywnych. Ponadto transferujemy wiedzę na temat energii odnawialnej, która z powodzeniem
                            pokrywa potrzeby budynków energetycznie pasywnych.
                        </p>
                    }
                    imgSrc={oNas1}
                    imgAlt="Budynek Instytutu w Gdańsku"
                />

                <ContainerColumn
                    textStart={
                        <>
                            <p>
                                Jesteśmy jedyną partnerską instytucją Instytutu Budownictwa Pasywnego z Darmstadt (PHI) i jako jedyni w Polsce podsiadamy
                                akredytację PHI do przeprowadzania certyfikacji budynków pasywnych na terenie Europy.
                            </p>
                        </>
                    }
                    imageDescription="Na zdjęciach: Budynek biurowy Polskiego Instytutu Budownictwa
                    Pasywnego i Energii Odnawialnej w Gdańsku oraz kompleks 3 domów
                    (energooszczędny 5l, niskoenergetyczny 3l, pasywny 1,5l)."
                    textEnd={
                        <>
                            <p>
                                Naszym celem jest możliwie szeroka popularyzacja wiedzy na temat budownictwa pasywnego. Pragniemy stale poszerzać krąg
                                sympatyków idei budownictwa pasywnego. Jest to właściwa droga do podniesienia, jakości życia oraz ochrony środowiska
                                naturalnego, a przede wszystkim wyraźna pomoc w uzyskaniu niezależności energetycznej naszego kraju.
                            </p>
                            <p>
                                <strong>
                                    Pragniemy współpracować ze wszystkimi, którzy tak jak my pragną ograniczenia bezsensownej konsumpcji energetycznej, a przy
                                    okazji celują w postęp z wykorzystaniem innowacyjnych rozwiązań w zakresie zrównoważonego energetycznie rozwoju.
                                </strong>
                            </p>
                        </>
                    }
                    imgSrc={oNas3}
                    imgAlt="Budynek siedziby Polskiego Instytutu Budownictwa Pasywnego"
                    imgSrc2={oNas2}
                    imgAlt2="Kompleks trzech domów energooszczędnych obok Instytutu"
                    shortBorder
                />

                <div className="about__icons">
                    <div className="about__icons--row">
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/1.svg" alt="icons/1" />
                            <p>ORGANIZACJA WYKŁADÓW, KONFERENCJI I SEMINARIÓW</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/2.svg" alt="icons/2" />
                            <p>ORGANIZACJA SZKOLEŃ I KURSÓW DLA UCZESTNIKÓW PROCESU BUDOWLANEGO</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/3.svg" alt="icons/3" />
                            <p>PROJEKTOWANIE BUDYNKÓW PASYWNYCH</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/4.svg" alt="icons/4" />
                            <p>WERYFIKACJA PROJEKTÓW BUDOWLANYCH</p>
                        </span>
                    </div>
                    <div className="about__icons--row">
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/5.svg" alt="icons/5" />
                            <p>CERTYFIKACJA BUDYNKÓW PASYWNYCH</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/6.svg" alt="icons/6" />
                            <p>
                                DYSTRYBUCJA NARZĘDZI (OPROGRAMOWANIE PHPP) WSPOMAGAJĄCYCH PROJEKTOWANIE NOWYCH BUDYNKÓW ORAZ TERMOMODERNIZACJĘ BUDYNKÓW
                                ISTNIEJĄCYCH
                            </p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/7.svg" alt="icons/7" />
                            <p>DYSTRYBUCJA KSIĄŻEK (BUDOWNICTWO PASYWNE, CIEPŁOWNICTWO, KLIMATYZACJA)</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/8.svg" alt="icons/8" />
                            <p>ZWIEDZANIE BUDYNKÓW PASYWNYCH Z WYKŁADEM I KOMENTARZEM NA TERENIE POLSKI I NIEMIEC</p>
                        </span>
                    </div>
                    <div className="about__icons--row">
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/9.svg" alt="icons/9" />
                            <p>UDZIELANIE PATRONATÓW MERYTORYCZNYCH ORAZ HONOROWYCH NA POTRZEBY POPULARYZACJI WYDARZEŃ TEMATYCZNYCH</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/10.svg" alt="icons/10" />
                            <p>WYPOŻYCZANIE WYSTAWY „BUDOWNICTWO PASYWNE OD A DO Z”</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/11.svg" alt="icons/11" />
                            <p>WSPÓŁPRACA Z PORTALAMI BRANŻOWYMI I PRASĄ</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/12.svg" alt="icons/12" />
                            <p>PROMOCJA FIRM POPULARYZUJĄCYCH BUDOWNICTWO PASYWNE</p>
                        </span>
                    </div>
                </div>

                <ContainerBlue
                    text={
                        <>
                            <p>
                                Naszym głównym celem jest popularyzacja i transfer wiedzy z zakresu budownictwa pasywnego oraz szerokie promowanie tego
                                standardu. Organizujemy konferencje, fora i spotkania dające możliwość wymiany doświadczeń, pogłębienia wiedzy oraz nawiązania
                                nowych kontaktów. Przygotowujemy i opracowujemy materiały szkoleniowo - dydaktyczne (dla doskonalenia zawodowego) i informacyjne
                                dla projektantów budynków pasywnych oraz wykonawców takich budynków. Chętnie wspieramy ambitne wydarzenia, takie jak
                                międzynarodowe i lokalne targi budowlane, ponieważ poprawa efektywności energetycznej naszego kraju jest w największej mierze
                                uzależniona od poziomu świadomości społeczeństwa polskiego.
                            </p>
                            <img src={leaf} alt="Liść" />
                        </>
                    }
                    border
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query About {
        heroImage: file(relativePath: { eq: "heroImages/hero_about.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
