import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, ContainerColumn, ContainerBlue, FullImageContainer } from '../../components';
import { heroText } from '../../constants/heroContent';

import Partnerstwo from '../../images/firm/partnership.svg';
import Konferencja from '../../images/firm/conference.svg';

export default function Partners({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.instytutPartnerzy}
            heroClass={'hero__subpage'}
            heroBackgroundImage={heroImage}
        >
            <section className="layout-content">
                <ContainerBlue
                    text={
                        <>
                            <p>
                                Od stycznia 2015 roku Instytut Budownictwa Pasywnego uczestniczy w
                                unijnym projekcie Built2Spec, którego celem jest wypełnienie luki
                                między planowaniem i rzeczywistym wykonaniem budynku. Tablet lub
                                smart fon w Tyn przypadku odgrywa kluczową rolę. Instytut
                                Budownictwa Pasywnego udostępnia swoją ekspertyzę rozwoju platformy
                                wysoko energooszczędnego budownictwa i zapewniania jakości i pracuje
                                nad interfejsami między platformą bazującą na BIM a panelem
                                planowania PHPP i narzędzi projektowych PH. Built2Spec jest
                                finansowany ze środków programu ramowego UE na rzecz badań naukowych
                                i innowacji "Horyzont 2020".
                            </p>
                            <p>
                                Instytut Budownictwa Pasywnego (PHI) uczestniczy w Projekcie
                                Sinfonia, finansowanym przez UE, w doradztwie i certyfikacji
                                projektów modernizacyjnych w miastach demonstracyjnych - Innsbrucku
                                i Bolzano. W rozwój i wdrożenie koncepcji wykazującej oszczędności w
                                około 500 mieszkaniach jest również zaangażowany PHI. Ponadto chodzi
                                o zagadnienia efektywności energetycznej i oszczędności oceny
                                potencjałów energii elektrycznej na szczeblu okręgowym. Opracowane w
                                projekcie wyniki i zastosowanie praktyczne zostaną wspólne z
                                zaangażowanymi „pionierskimi” miastami Pafos (Cypr), La Rochelle
                                (Francja), Rosenheim (Niemcy), Sewilla (Hiszpania) i Boras (Szwecja)
                                włączone w konkretne, zrównoważone plany rozwoju energetycznego
                                odpowiednich miejskich koncepcji.
                            </p>
                        </>
                    }
                />
                <ContainerColumn
                    textStart={<></>}
                    textEnd={
                        <>
                            <p>
                                Ponadto PHI koordynuje projekt EuroPHit finansowany przez IEE. Celem
                                jest ustanowienie kryteriów i możliwości certyfikacji dla wysoko
                                wydajnościowych modernizacji poprzez normy EnerPHit, jeśli mają być
                                wykonywane stopniowo w dłuższym okresie czasu. Potwierdzają to nowe
                                narzędzia programowe, projekty pilotażowe takie jak szkolenia
                                projektantów i mistrzów wykonawców. Zainteresowane strony (w tym
                                władze lokalne, instytucje finansowe lub producenci) będą przy tym
                                jeszcze lepsze. Jednocześnie specjalnie promowane jest zastosowanie
                                komponentów do budownictwa pasywnego na remonty
                            </p>
                            <p>
                                Instytut Budownictwa Psywnego (PHI) odegrał znaczącą rolę w
                                bieżących projektach Unii Europejskiej w obszarze programu
                                "Inteligentna Energia dla Europy" (IEE) i w innych projektach:
                                "Promocja Europejskiego Budownictwa Pasywnego" (PEP) i "Passive On".
                                Koordynację przy projekcie Pass Reg (Regiony Budownictwa Pasywnego z
                                odnawialną energią) finansowanym przez IEE przejął PHI i jest on
                                aktywnym partnerem w projekcie FP7 3encult. Ponadto PHI jest
                                partnerem przy TASKS 28 („Zrównoważony Odbudowa Solar”) i 37
                                ("Zaawansowana renowacja budynków") IEA (Międzynarodowej Agencji
                                Energii).
                            </p>
                            <p>
                                W zakończonym już projekcie CEPHEUS (Ekonomicznie wydajne domy
                                pasywne jako europejskie standardy) po stronie PHI leżało naukowe
                                kierownictwo. Projekt był finansowany przez UE w ramach programu
                                Thermie i przez Hessen. W ramach projektu CEPHEUS zostało wybudowane
                                i wykorzystane w Europie ponad 220 mieszkań w formie budownictwa
                                pasywnego.
                            </p>
                        </>
                    }
                    imgSrc={Partnerstwo}
                    alt="Kompleks trzech domów energooszczędnych obok Instytutu"
                    shortBorder
                />

                <FullImageContainer image={Konferencja} />

                <ContainerBlue
                    text={
                        <>
                            <p>
                                PHI organizuje corocznie od 1996 roku Międzynarodową Konferencję
                                Budownictwa Pasywnego. Impreza ta jest uznanym światowym centrum dla
                                energooszczędnego budownictwa i renowacji i jako takie ważnym
                                dorocznym miejscem spotkań ludzi nauki, architektury, technologii i
                                rozwoju produktów.
                            </p>
                            <p>
                                PHI był również odpowiedzialny za fizyczne doradztwo budowlane i
                                wsparcie naukowe wielu projektów pilotażowych, m.in. w pierwszym
                                pasywnym biurowcu (Cölbe w pobliżu Marburgu), pierwszy fabryka
                                pasywna (Bensheim w pobliżu Darmstadt), pierwsze pasywne szkoły
                                (Frankfurt nad Menem, Aufkirchen koło Monachium), pierwsze pasywne
                                pływalnie kryte (Bamberg i Lünen) oraz pierwszy remont domu
                                pasywnego (Norymberga, Frankfurt, Ludwigshafen). PHI podjął się
                                również naukowej oceny tych projektów, w związku z tym odgrywał w
                                tym istotną rolę.
                            </p>
                            <p>
                                Za koncepcję rozwoju Budownictwa Pasywnego Wolfgang Feist został w
                                2001 roku uhonorowany Nagrodą Środowiska przez Niemiecką Federalną
                                Fundację Ekologiczną. W 2003 roku miastu Göteborg razem ze szwedzkim
                                architektem Hansem Eek została przyznana Międzynarodowa Nagroda
                                Środowiska. Przez to została doceniona ich wspólna pionierska praca,
                                która przyczynia się do znacznej redukcji zużycia paliw kopalnych, a
                                tym samym do zmniejszenia emisji CO2.
                            </p>
                        </>
                    }
                    border
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query InstQuery2 {
        heroImage: file(relativePath: { eq: "heroImages/hero_institute.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1900)
            }
        }
    }
`;
