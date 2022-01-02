import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { Announcements, SubpageNavbar, Layout } from '../../components';
import { firmNavItems } from '../../constants/subNavItems';
import budynekBiurowyBok from '../../images/firm/budynek-biurowy-bok.png';

import './Firm.scss';

export default function About() {
    return (
        <Layout>
            <Announcements />
            <SubpageNavbar navElements={firmNavItems} />
            <section className="layout-content">
                <div className="about-paragraph">
                    <p>
                        Od 2004 roku jesteśmy niezależną polską instytucją, aktualnie działającą na
                        zasadach non-profit. Naszym celem jest upowszechnianie wiedzy o budownictwie
                        pasywnym, zero energetycznym, plus energetycznym oraz o kompleksowej
                        termomodernizacji z wykorzystaniem technologii i komponentów pasywnych.
                        Ponadto transferujemy wiedzę na temat energii odnawialnej, która z
                        powodzeniem pokrywa potrzeby budynków energetycznie pasywnych.
                    </p>
                    <span>
                        <StaticImage src="../../images/firm/budynek-biurowy-bok.png" />
                    </span>
                </div>

                <div className="about-paragraph__orange">
                    <span className="about-paragraph__text">
                        <p>
                            Jesteśmy jedyną partnerską instytucją Instytutu Budownictwa Pasywnego z
                            Darmstadt (PHI) i jako jedyni w Polsce podsiadamy akredytację PHI do
                            przeprowadzania certyfikacji budynków pasywnych na terenie Europy.
                        </p>
                        <p>
                            Na zdjęciach: Budynek biurowy Polskiego Instytutu Budownictwa Pasywnego
                            i Energii Odnawialnej w Gdańsku oraz kompleks 3 domów (energooszczędny
                            5l, niskoenergetyczny 3l, pasywny 1,5l).
                        </p>
                    </span>

                    <span className="about-paragraph__image">
                        <p className="about-paragraph__background"></p>
                        <StaticImage src="../../images/firm/budynek-biurowy-bok.png" className="about-paragraph__img-src" />
                    </span>
                </div>
                <p>
                    Naszym celem jest możliwie szeroka popularyzacja wiedzy na temat budownictwa
                    pasywnego. Pragniemy stale poszerzać krąg sympatyków idei budownictwa pasywnego.
                    Jest to właściwa droga do podniesienia, jakości życia oraz ochrony środowiska
                    naturalnego, a przede wszystkim wyraźna pomoc w uzyskaniu niezależności
                    energetycznej naszego kraju.
                </p>
                <p>
                    Będziemy współpracować ze wszystkimi, którzy tak jak my pragną ograniczenia
                    bezsensownej konsumpcji energetycznej a przy okazji celują w postęp z
                    wykorzystaniem innowacyjnych rozwiązań w zakresie zrównoważonego energetycznie
                    rozwoju.
                </p>
                <ul>
                    <li>organizacja wykładów, konferencji i seminariów;</li>
                    <li>
                        organizacja <strong>szkoleń i kursów</strong> dla uczestników procesu
                        budowlanego;
                    </li>
                    <li>projektowanie budynków pasywnych;</li>
                    <li>weryfikacja projektów budowlanych;</li>
                    <li>
                        <strong>certyfikacja budynków pasywnych</strong>;
                    </li>
                    <li>
                        <strong>dystrybucja narzędzi</strong> (oprogramowanie PHPP) wspomagających
                        projektowanie nowych budynków oraz termomodernizację budynków istniejących;
                    </li>
                    <li>
                        <strong>dystrybucja książek</strong> o budownictwie pasywnym oraz z zakresu
                        ciepłownictwa i klimatyzacji;
                    </li>
                    <li>
                        zwiedzanie budynków pasywnych z wykładem i komentarzem na terenie Polski i
                        Niemiec;
                    </li>
                    <li>
                        udzielanie patronatów merytorycznych oraz honorowych na potrzeby
                        popularyzacji wydarzeń tematycznych;
                    </li>
                    <li>
                        wypożyczanie wystawy <strong>„Budownictwo pasywne od A do Z”</strong>;
                    </li>
                    <li>współpraca z portalami branżowymi i prasą;</li>
                    <li>promocja firm popularyzujących budownictwo pasywne;</li>
                </ul>
                <p>
                    Naszym głównym celem jest popularyzacja i transfer wiedzy z zakresu budownictwa
                    pasywnego oraz szerokie promowanie tego standardu. Organizujemy konferencje,
                    fora i spotkania dające możliwość wymiany doświadczeń, pogłębienia wiedzy oraz
                    nawiązania nowych kontaktów. Przygotowujemy i opracowujemy materiały szkoleniowo
                    - dydaktyczne (dla doskonalenia zawodowego) i informacyjne dla projektantów
                    budynków pasywnych oraz wykonawców takich budynków. Chętnie wspieramy ambitne
                    wydarzenia takie jak międzynarodowe czy lokalne targi budowlane, gdyż poprawa
                    efektywności energetycznej naszego kraju jest w największej mierze uzależniona
                    od poziomu świadomości społeczeństwa polskiego.
                </p>
            </section>
        </Layout>
    );
}
