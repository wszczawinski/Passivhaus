import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, ContainerColumn, ContainerRow } from '../../components';
import { heroText } from '../../constants/heroContent';

import charakterystyka2 from '../../images/budynek-pasywny/charakterystyka2.png';
import charakterystyka4 from '../../images/budynek-pasywny/charakterystyka4.jpeg';
import charakterystyka3 from '../../images/budynek-pasywny/charakterystyka3.png';
import charakterystyka5 from '../../images/budynek-pasywny/charakterystyka5.png';
import charakterystyka6 from '../../images/budynek-pasywny/charakterystyka6.png';
import charakterystyka7 from '../../images/budynek-pasywny/charakterystyka7.png';

import './Passivhaus.scss';

export default function Charakterystyka({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.passivhausCharakterystyka}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerRow
                    text={
                        <p>
                            <h3>Zwarta bryła budynku i bardzo dobra termoizolacja:</h3> Wszystkie
                            elementy zewnętrznych przegród budynku są izolowane termicznie w takim
                            stopniu, aby współczynnik U całej bryły budynku ze wszystkimi
                            przegrodami zewnętrznymi nie przekraczał wartości 0,15 W/(m2K) przy
                            jednoczesnej eliminacji wszystkich znaczących mostków cieplnych.
                        </p>
                    }
                    imgSrc={charakterystyka2}
                    alt="charakterystyka2"
                    imgSmall
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Energooszczędne - certyfikowane pasywne okna:</h3>
                            Okna (oszklenie i ramy) powinny mieć współczynniki U poniżej 0,80
                            W/(m2K), przy czym współczynniki g okien muszą wynosić około 50%.
                        </p>
                    }
                    imgSrc={charakterystyka4}
                    alt="charakterystyka4"
                    smallPadding
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Południowa orientacja i uwzględnienie problematyki zacieniania:</h3>
                            Pasywne wykorzystanie energii słonecznej jest znaczącym czynnikiem przy
                            projektowaniu budynku pasywnego. Południowa strona budynku ma za zadanie
                            pozyskanie możliwie największej ilości ciepła od słońca w sezonie
                            grzewczym. -{' '}
                            <strong>
                                Do precyzyjnego oszacowania zysków od słońca najlepiej sprawdza się
                                Pakiet do Projektowania Budynków Pasywnych PHPP.
                            </strong>
                        </p>
                    }
                    imgSrc={charakterystyka3}
                    alt="charakterystyka3"
                    smallPadding
                    colorCream
                    noBorder
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Pasywne podgrzewanie wstępne powietrza świeżego (zewnętrznego):</h3>
                            Świeże powietrze zewnętrzne może być doprowadzane do budynku przez GWC
                            rurowe, w których dochodzi do wymiany ciepła z gruntem. Powoduje to
                            wstępne podgrzanie powietrza świeżego do temperatury powyżej 5°C, nawet
                            w trakcie zimnych dni sezonu zimowego.{' '}
                            <strong>
                                Efektywny odzysk ciepła z powietrza usuwanego przy wykorzystaniu
                                wymiennika ciepła powietrze-powietrze:{' '}
                            </strong>{' '}
                            Większość ciepła obecnego w powietrzu usuwanym jest przekazywana do
                            napływającego powietrza świeżego (sprawność odzysku ciepła powyżej 80%).{' '}
                            <strong>
                                Zaopatrzenie w ciepłą wodę użytkową wykorzystujące odnawialne źródła
                                energii:
                            </strong>{' '}
                            Energię do przygotowania ciepłej wody użytkowej dostarczają kolektory
                            słoneczne lub pompy ciepła.
                        </p>
                    }
                    imgSrc={charakterystyka5}
                    alt="charakterystyka5"
                    smallPadding
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Szczelność powietrzna przegród zewnętrznych budynku (powłoki):</h3>
                            Infiltracja powietrza (niekontrolowany przepływ powietrza) przez
                            nieszczelności połączeń przegród zewnętrznych musi być mniejsza od 0,6
                            h-1 objętości całego budynku na godzinę i zmierzona przez tzw. Blower
                            Door Test. Inaczej mówiąc Niekontrolowana infiltracja powietrza
                            zewnętrznego przez nieszczelności dla różnicy ciśnień 50 Pa musi wynosić
                            poniżej 0,6 kubatury budynku na godzinę.
                        </p>
                    }
                    imgSrc={charakterystyka6}
                    alt="charakterystyka6"
                    shortBorder
                    noBorder
                    colorCream
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Energooszczędny sprzęt gospodarstwa domowego:</h3>W domu pasywnym
                            nieodzowne są pewne urządzenia takie jak centrala wentylacyjna, ale
                            muszą charakteryzować się one niskim zużyciu energii - poniżej 0,45W/m3.
                            Sprzęt AGD (lodówki, kuchenki, zamrażarki, lampy, pralki, suszarki itd.)
                            również musi charakteryzować możliwie najwyższa klasa energetyczna.
                        </p>
                    }
                    imgSrc={charakterystyka7}
                    alt="charakterystyka7"
                    smallPadding
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query PassQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_passivehouse.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
