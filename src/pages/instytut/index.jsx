import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, ContainerRow, ContainerColumn, ContainerBlue } from '../../components';
import oNas1 from '../../images/firm/o-nas-1.svg';
import oNas2 from '../../images/firm/o-nas-2.svg';
import leaf from '../../images/firm/icons/leaf.svg';
import { heroText } from '../../constants/heroContent';
import heroImage from '../../images/heroImages/hero_institute.svg';

import './Firm.scss';

export default function About() {
    return (
        <Layout
            heroTextContent={heroText.firmText}
            heroClass={'hero__subpage'}
            heroBackgroundImage={heroImage}
        >
            <section className="layout-content">
                <ContainerRow
                    text={
                        <p>
                            Od 2004 roku jesteśmy niezależną polską instytucją, aktualnie działającą
                            na zasadach non-profit. Naszym celem jest upowszechnianie wiedzy o
                            <strong>
                                budownictwie pasywnym, zero energetycznym, plus energetycznym oraz o
                                kompleksowej termomodernizacji
                            </strong>
                            z wykorzystaniem technologii i komponentów pasywnych. Ponadto
                            transferujemy wiedzę na temat energii odnawialnej, która z powodzeniem
                            pokrywa potrzeby budynków energetycznie pasywnych.
                        </p>
                    }
                    imgSrc={oNas1}
                    alt="Budynek Instytutu w Gdańsku"
                />

                <ContainerColumn
                    textStart={
                        <>
                            <p>
                                Jesteśmy jedyną partnerską instytucją Instytutu Budownictwa
                                Pasywnego z Darmstadt (PHI) i jako jedyni w Polsce podsiadamy
                                akredytację PHI do przeprowadzania certyfikacji budynków pasywnych
                                na terenie Europy.
                            </p>
                            <p>
                                Na zdjęciach: Budynek biurowy Polskiego Instytutu Budownictwa
                                Pasywnego i Energii Odnawialnej w Gdańsku oraz kompleks 3 domów
                                (energooszczędny 5l, niskoenergetyczny 3l, pasywny 1,5l).
                            </p>
                        </>
                    }
                    textEnd={
                        <>
                            <p>
                                Naszym celem jest możliwie szeroka popularyzacja wiedzy na temat
                                budownictwa pasywnego. Pragniemy stale poszerzać krąg sympatyków
                                idei budownictwa pasywnego. Jest to właściwa droga do podniesienia,
                                jakości życia oraz ochrony środowiska naturalnego, a przede
                                wszystkim wyraźna pomoc w uzyskaniu niezależności energetycznej
                                naszego kraju.
                            </p>
                            <p>
                                <strong>
                                    Pragniemy współpracować ze wszystkimi, którzy tak jak my pragną
                                    ograniczenia bezsensownej konsumpcji energetycznej, a przy
                                    okazji celują w postęp z wykorzystaniem innowacyjnych rozwiązań
                                    w zakresie zrównoważonego energetycznie rozwoju.
                                </strong>
                            </p>
                        </>
                    }
                    imgSrc={oNas2}
                    alt="Kompleks trzech domów energooszczędnych obok Instytutu"
                    shortBorder
                />

                <div className="about__icons">
                    <div className="about__icons--row">
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/1.svg" />
                            <p>ORGANIZACJA WYKŁADÓW, KONFERENCJI I SEMINARIÓW</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/2.svg" />
                            <p>ORGANIZACJA SZKOLEŃ I KURSÓW DLA UCZESTNIKÓW PROCESU BUDOWLANEGO</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/3.svg" />
                            <p>PROJEKTOWANIE BUDYNKÓW PASYWNYCH</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/4.svg" />
                            <p>WERYFIKACJA PROJEKTÓW BUDOWLANYCH</p>
                        </span>
                    </div>
                    <div className="about__icons--row">
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/5.svg" />
                            <p>CERTYFIKACJA BUDYNKÓW PASYWNYCH</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/6.svg" />
                            <p>
                                DYSTRYBUCJA NARZĘDZI (OPROGRAMOWANIE PHPP) WSPOMAGAJĄCYCH
                                PROJEKTOWANIE NOWYCH BUDYNKÓW ORAZ TERMOMODERNIZACJĘ BUDYNKÓW
                                ISTNIEJĄCYCH
                            </p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/7.svg" />
                            <p>
                                DYSTRYBUCJA KSIĄŻEK (BUDOWNICTWO PASYWNE, CIEPŁOWNICTWO,
                                KLIMATYZACJA)
                            </p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/8.svg" />
                            <p>
                                ZWIEDZANIE BUDYNKÓW PASYWNYCH Z WYKŁADEM I KOMENTARZEM NA TERENIE
                                POLSKI I NIEMIEC
                            </p>
                        </span>
                    </div>
                    <div className="about__icons--row">
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/9.svg" />
                            <p>
                                UDZIELANIE PATRONATÓW MERYTORYCZNYCH ORAZ HONOROWYCH NA POTRZEBY
                                POPULARYZACJI WYDARZEŃ TEMATYCZNYCH
                            </p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/10.svg" />
                            <p>WYPOŻYCZANIE WYSTAWY „BUDOWNICTWO PASYWNE OD A DO Z”</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/11.svg" />
                            <p>WSPÓŁPRACA Z PORTALAMI BRANŻOWYMI I PRASĄ</p>
                        </span>
                        <span className="about__icons--single-icon">
                            <StaticImage src="../../images/firm/icons/12.svg" />
                            <p>PROMOCJA FIRM POPULARYZUJĄCYCH BUDOWNICTWO PASYWNE</p>
                        </span>
                    </div>
                </div>

                <ContainerBlue
                    text={
                        <>
                            <p>
                                Naszym głównym celem jest popularyzacja i transfer wiedzy z zakresu
                                budownictwa pasywnego oraz szerokie promowanie tego standardu.
                                Organizujemy konferencje, fora i spotkania dające możliwość wymiany
                                doświadczeń, pogłębienia wiedzy oraz nawiązania nowych kontaktów.
                                Przygotowujemy i opracowujemy materiały szkoleniowo - dydaktyczne
                                (dla doskonalenia zawodowego) i informacyjne dla projektantów
                                budynków pasywnych oraz wykonawców takich budynków. Chętnie
                                wspieramy ambitne wydarzenia, takie jak międzynarodowe i lokalne
                                targi budowlane, ponieważ poprawa efektywności energetycznej naszego
                                kraju jest w największej mierze uzależniona od poziomu świadomości
                                społeczeństwa polskiego.
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
