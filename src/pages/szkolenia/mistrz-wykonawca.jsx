import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { ContainerColumn, ContainerRow, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

import './Workshops.scss';

import mistrz0 from '../../images/szkolenia/mistrz0.png';
import cert from '../../images/szkolenia/cert-mistrz.jpg';

export default function MistrzWykonawca({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.workshopsMistrz}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerColumn
                    imgSrc={mistrz0}
                    textStartRow
                    textStart={
                        <p>
                            Szkolenie Certified Passive House Tradesperson – Europejski,
                            Certyfikowany Mistrz / Wykonawca Budownictwa Pasywnego jest organizowane
                            przez Akademię Budownictwa Pasywnego we Wrocławiu – GreenCherry
                            Architecture, która jako jedyna w Polsce posiada akredytację Polskiego i
                            Niemieckiego Instytutu Budownictwa Pasywnego do przeprowadzania szkoleń
                            dla rzemieślników budowlanych i kadry doradczo – nadzorującej.
                        </p>
                    }
                    alt="szkolenia-mistrz-0"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h2 className="for-who">Dla kogo jest kurs CEPHt?</h2>
                        </p>
                    }
                    noBorder
                />
                <div className="workshop__icons--mistrz">
                    <div className="workshop__icons--row">
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/rzem.png" />
                            <p className="mistrz">rzemieślnicy, mistrzowie rzemiosła</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/ekipa.png" />
                            <p className="mistrz">
                                wykonawcy, ekipy budowlane różnych etapów procesu budowlanego
                            </p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/nadzor.png" />
                            <p className="mistrz">nadzór \ kierownicy budowy</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/rzeczo.png" />
                            <p className="mistrz">rzeczoznawcy związani z tematyką budownictwa</p>
                        </span>
                    </div>
                    <div className="workshop__icons--row">
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/uczen.png" />
                            <p className="mistrz">
                                uczniowie ostatnich klas szkół zawodowych kierunków związanych z
                                budownictwem
                            </p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/student.png" />
                            <p className="mistrz">studenci budownictwa</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/arch.png" />
                            <p className="mistrz">
                                architekci, którzy chcą poznać budynki pasywne także od strony
                                wykonawczej
                            </p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/invest.png" />
                            <p className="mistrz">inwestorzy</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/interested.png" />
                            <p className="mistrz">
                                osoby zainteresowane budownictwem pasywnym posiadające podstawową
                                wiedzę z zakresu budownictwa
                            </p>
                        </span>
                    </div>
                </div>
                <ContainerRow
                    text={
                        <p>
                            <h2>Egzamin</h2>
                            Kurs CEPHT przygotowuje do udziału w egzaminie i umożliwia zdobycie
                            tytułu Certified Passive House Tradesperson – (pol. Certyfikowany Mistrz
                            Budownictwa Pasywnego). Jednakże egzamin nie odbywa się od razu po
                            zakończeniu kursu i jego koszt również nie jest wliczony w cenę kursu.
                            Egzamin w Polsce odbywa się w wyznaczonych wspólnie przez Passivhaus
                            Institut i PIBPiEO datach, dwa razy w roku.
                            <h4>Termin najbliższej edycji szkolenia CEPHt </h4>
                            IV Kwartał 2022
                            <h4>Koszt uczestnictwa w szkoleniu CEPHt</h4> 3990 PLN netto – za 50h
                            interdyscyplinarnego doskonalenia <br /> 2750 PLN netto – podwójny
                            egzamin z wpisem na listę ekspertów
                        </p>
                    }
                    imgSrc={cert}
                    alt="certyfikat"
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h2>Zgłoszenie swojego udziału w kursie CEPHt</h2>W celu skutecznego
                            zgłoszenia należy kliknąć w poniższą grafikę a następnie wypełnić i
                            przesłać do PIBP formularz zgłoszeniowy. Opcjonalnie można pobrać
                            formularz zgłoszeniowy na dysk komputera , wypełnić ręcznie i wysłać
                            zgłoszenie na email:{' '}
                            <i>
                                <u>pibp@pibp.pl</u>
                            </i>{' '}
                            lub{' '}
                            <i>
                                <u>info@pibp.pl</u>
                            </i>{' '}
                            podając w tytule: „Zgłoszenie CEPHt”. Po odebraniu i odczytaniu
                            formularza zostanie wysłana do nadawcy odpowiedź z informacją o stanie
                            danego zgłoszenia tj. potwierdzenie uczestnictwa, zapis na listę
                            rezerwową, zapis na listę oczekujących etc.
                            <br />
                            <br />
                            <a
                                href={withPrefix('formularz-zgloszeniowy-CEPHt.pdf')}
                                className="signup"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <StaticImage src="../../images/szkolenia/zgloszenie.png" />
                            </a>
                        </p>
                    }
                />
                <ContainerColumn
                    textStart={
                        <p>
                            Certyfikacja mistrzów i wykonawców ma charakter dobrowolny. Zdarza się,
                            że osoby nie posiadające certyfikatu Certified Passive House
                            Tradesperson (CEPHt) biorą udział w budowie obiektów pasywnych lub
                            pełnią nadzór na takich budowach. Z drugiej strony aby budynek mógł
                            uzyskać certyfikat nie wystarczy, że zaprojektuje lub wybuduje go ekipa
                            posiadająca certyfikat. Dla każdego budynku, który ma otrzymać
                            certyfikat należy wykazać odpowiednio wysoki poziom jakości
                            projektowania i na ostatnim etapie potwierdzić wytyczne projektowe
                            rzetelnym wykonawstwem.
                        </p>
                    }
                    textEnd={
                        <p>
                            Kurs Certified Passive House Tradesperson – Certifikowany Mistrz
                            Nadzorca Budownictwa Pasywnego został opracowany przez Passivhaus
                            Institut w Darmstadt (PHI). Za realizację tego doskonalenia w Polsce
                            jest odpowiedzialna nasza Akademia Zdrowego Budownictwa GreenCherry
                            prowadzona przez naszego eksperta p. Kamila Wiśniewskiego. W celu
                            skutecznego nauczania w Polsce treść kursu została dostosowana i
                            przetłumaczona na język Polski. Polska wersja kursu została rozbudowana
                            przez naszego eksperta do 55 h zegarowych w oparciu o bogate
                            doświadczenie zdobyte na budowach w Polsce i za granicą. zegarowych
                            kursu ma za zadanie dostarczyć wiedzę z zakresu budownictwa pasywnego
                            Uczestnictwo w kursie CEPHt to możliwość uzyskania interdyscyplinarnej
                            wiedzy, ale dla wielu i unikalnej, ze względu na autorskie rady i
                            rozwiązania wynikające z doświadczenia trenerań
                        </p>
                    }
                    colorCream
                    noBorder
                />
                <div className='pros-cepht'>
                <StaticImage src="../../images/szkolenia/mistrz-warto.png" />
                </div>
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Dlaczego warto?</h3>
                            Aby pozostać na rynku i rozwijać swoją działalność, zwiększać swoje
                            zyski, działać z sukcesem na innych rynkach, musisz dostosować się do
                            rozpoczętych w budownictwie zmian. Nie traktuj tego jak obowiązek – to
                            się po prostu opłaca. Wiedzę, którą otrzymasz zastosujesz w każdym
                            budynku, bez względu na jego wielkość, technologię czy kubaturę, jak
                            również sam standard energetyczny.
                        </p>
                    }
                    textEnd={
                        <p>
                            <h3>Zalety szkolenia CEPHt</h3> 
                            - 55h intensywnego szkolenia, ponad 1000 stron
                            prezentacji, ćwiczenia praktyczne i teoretyczne, to wszystko na
                            podstawie 25 letnich doświadczeń w projektowaniu i realizowaniu obiektów
                            w standardzie pasywnym i wyższym <br />
                            - Europejski certyfikat, tytuł oraz
                            logo rozpoznawalne i uznawane w całej Europie - Konkurencyjność i
                            wyróżnienie spośród wszystkich innych firm <br />
                            - Zwielokrotniona szansa na
                            wybór firmy w procesie budowy obiektów pasywnych i energooszczędnych-
                            wpis na polską i międzynarodową listę ekspertów
                        </p>
                    }
                />
                <div className='pros-cepht'>
                <StaticImage src="../../images/szkolenia/zalety-mistrz.png" />
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query WorkQuery1 {
        heroImage: file(relativePath: { eq: "heroImages/hero_cepht.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
