import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';

import { ContainerBlue, ContainerColumn, ContainerRow, Layout } from '@/components';
import { heroText } from '@/constants/heroContent';
import szkolenieMostki1 from '@/images/workshops/mostki/akademia pibp mostki termiczne sankowski.png';
import szkolenieMostki3 from '@/images/workshops/mostki/ciągłość-izolacji-zasada-domow-pasywnych.jpg';
import szkolenieMostki2 from '@/images/workshops/mostki/mostek-termiczny-plyta-fundamentowa-styk-sciany-zewnetrznej_.jpg';
import szkolenieMostki0 from '@/images/workshops/mostki/szkolenie mostki termiczne 2024 obliczenia analiza.jpg';

import { Faq } from '@/components/Faq/Faq';
import { Question } from '@/components/Faq/Question';
import { BiEnvelope } from 'react-icons/bi';
import './Workshops.scss';

export default function ThermalBridges({ data }: PageProps<Queries.ThermalBridgesQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.workshopsMostki} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <ContainerColumn
                    textStart={
                        <p>
                            <h2>Kompletne szkolenie 2024 – obliczenia i analiza w programie Therm</h2>
                            Obliczanie mostków termicznych krok po kroku. Szkolenie zakończone certyfikatem Polskiego Instytutu Budownictwa Pasywnego. Zgodne z
                            normą PN-EN ISO 10211:2017.
                        </p>
                    }
                    imgSrc={szkolenieMostki0}
                    imgAlt="szkolenie mostki termiczne 2024 obliczenia analiza"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />
                <ContainerBlue
                    text={
                        <>
                            <h3>Definicja mostków termicznych</h3>
                            <p>
                                Mostki termiczne są to obszary przegród zewnętrznych budynku, które wyraźnie różnią się przewodnictwem cieplnym w stosunku do
                                otaczających je obszarów. Są to miejsca, w których przepływ ciepła jest najczęściej wyraźnie zwiększony. To one, w dużej mierze
                                odpowiadają za niekontrolowaną utratę, zgromadzonego w budynkach ciepła. Innymi słowy, mostek termiczny jest swego rodzaju
                                autostradą, którą odbywa się podróż ciepła z punktu A (cieplejszy obszar) do punktu B (zimniejszy obszar). Ciepło zawsze wybiera
                                drogę najmniejszych oporów. <strong className="mostki-definition">Mostki termiczne</strong> mogą być nazywane{' '}
                                <strong className="mostki-definition">mostkami cieplnymi</strong> i jest to również poprawne nazewnictwo.
                            </p>
                        </>
                    }
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Opis i cel szkolenia </h3>
                            Szkolenie akredytowane przez PIBP realizowane jest przez{' '}
                            <strong>dyrektora akademii PIBP w Warszawie - CS studio Cezary Sankowski</strong>
                        </p>
                    }
                    imgSrc={szkolenieMostki1}
                    imgAlt="akademia pibp mostki termiczne sankowski"
                    shortBorder
                    noBorder
                    smallPadding
                    textEnd={
                        <>
                            <p>
                                Szkolenie realizowane jest online w trakcie 2 dni, każdego dnia po 4h.
                                <br />
                                Głównym celem szkolenia jest przekazanie uczestnikom umiejętności precyzyjnego obliczania dwuwymiarowych mostków termicznych
                                zgodnie z najnowszą wersją normy <strong>PN-EN ISO 10211:2017-09</strong> oraz dostarczenie niezbędnej wiedzy do oceny wpływu
                                tych obszarów o zwiększonym przewodnictwie cieplnym na ogólną stratę energii w budynkach.
                            </p>
                            <p>
                                Absolwenci szkolenia posiadają umiejętność wykorzystywania metodyki obliczeniowej podczas projektowania budynków oraz
                                przeprowadzania audytów energetycznych. Dzięki umiejętności liczenia mostków termicznych mogą skutecznie współpracować z PIBP
                                przy tworzeniu energooszczędnych domów i budynków, w tym budynków pasywnych, które stanowią najwyższy standard efektywności
                                energetycznej.
                            </p>
                        </>
                    }
                />
                <ContainerRow
                    text={
                        <p>
                            <h3>Program szkolenia krok po kroku.</h3>
                            <ol>
                                <li>Czym są mostki termiczne i jakie są ich rodzaje.</li>
                                <li>Wpływu mostków termicznych na straty ciepła. </li>
                                <li>Rodzaje mostków termicznych.</li>
                                <li>Metody identyfikacji mostków termicznych w projekcie budowlanym..</li>
                                <li>Jak rozumieć współczynnik Ψ (psi).</li>
                                <li>Wymagania normy PN-EN ISO 10211.</li>
                                <li>Konfiguracja modelu do obliczeń, warunki brzegowe i inne zmienne parametry.</li>
                                <li>Oprogramowanie Therm - obsługa i funkcjonalność.</li>
                                <li>Wykorzystanie podrysów .dxf w programie Therm.</li>
                                <li>Analiza i ocena wyników, przyczyny powstania mostka.</li>
                                <li>Sposoby eliminacji mostka termicznego.</li>
                                <li>Współczynnik psi-wykonanie obliczeń.</li>
                                <li>Sporządzenie raportu w arkuszu Excel.</li>
                            </ol>
                        </p>
                    }
                />
                <ContainerColumn
                    textStart={
                        <>
                            <p>
                                <h2>Dla kogo jest to szkolenie</h2>
                                Umiejętność obliczania, analizowania i niwelowania mostków cieplnych jest przydatna zwłaszcza dla: audytorów i doradców
                                energetycznych, architektów, wykonawców budowlanych oraz producentów komponentów i systemów budowlanych.
                            </p>
                            <p>
                                W szczególności osoby z branży budowlanej zainteresowane poszerzeniem swojej wiedzy zawodowej, w tym absolwenci szkoleń i kursów
                                z zakresu{' '}
                                <strong>
                                    <a href="https://pibp.pl/szkolenia/projektant-doradztwa/">projektowania</a>
                                </strong>{' '}
                                i{' '}
                                <strong>
                                    <a href="https://pibp.pl/szkolenia/mistrz-wykonawca/">budowania</a>
                                </strong>{' '}
                                obiektów zgodnie z{' '}
                                <strong>
                                    <u>kryteriami</u>
                                </strong>{' '}
                                Passivhaus Institut w Darmstadt, takich jak budynek pasywny (Passive House Standard) i budynek niskoenergetyczny (Low Energy
                                House Standard).
                            </p>
                        </>
                    }
                />
                <ContainerColumn
                    textStart={
                        <>
                            <p>
                                <h2>Opis programu Therm</h2>
                                <strong>Therm</strong> to aplikacja do modelowania termicznego, która umożliwia wykonanie dokładnych symulacji, ocenę zachowania
                                elementów budynku pod względem termicznym, oraz poprawę rozwiązań konstrukcyjnych w celu zwiększenia efektywności energetycznej.
                            </p>
                            <p>
                                Analiza przenikania ciepła w programie <strong>Therm</strong> pozwala określić skuteczność komponentów i materiałów budowlanych
                                w kontekście efektywności energetycznej oraz oszacować lokalne wzorce temperatur, które mogą mieć wpływ na ewentualne problemy z
                                kondensacją powierzchniową.
                            </p>
                        </>
                    }
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />
                <ContainerBlue
                    text={
                        <>
                            <h3>Materiały edukacyjne i certyfikat dla uczestników</h3>
                            <p>
                                Uczestnicy szkolenia{' '}
                                <strong className="mostki-definition">
                                    Mostki Termiczne: Kompletne szkolenie 2024: obliczenia i analiza w programie Therm
                                </strong>{' '}
                                otrzymają materiały edukacyjne, które będą stanowić wartościową pomoc w zdobywaniu wiedzy na temat mostków termicznych i
                                wykorzystywania programu Therm. Materiały te będą zawierać teoretyczne informacje, praktyczne przykłady oraz dodatkowe materiały
                                uzupełniające.
                            </p>
                            <p>
                                Po szkoleniu uczestnicy uzyskają certyfikat potwierdzający ich zaangażowanie i zdobytą wiedzę z zakresu obliczania mostków
                                termicznych w aplikacji Therm. Dokument może być np. wykorzystany przez osoby posiadające rekomendację{' '}
                                <a className="mostki-link" href="https://pibp.pl/ambasadorzy/">
                                    Ambasadora Budownictwa Pasywnego
                                </a>{' '}
                                na kolejnym etapie swojej zawodowej kariery.
                            </p>
                        </>
                    }
                />
                <ContainerColumn
                    textStart={
                        <>
                            <p>
                                <h3>Wymagania osobowe i techniczne</h3>
                            </p>
                            <p>
                                1. Uczestnicy zainteresowani udziałem w szkoleniu powinni mieć podstawową wiedzę na temat ochrony cieplnej budynków, taką jak
                                współczynnik przenikania ciepła U i współczynnik przewodzenia ciepła λ. Zalecana podstawowa znajomość języka angielskiego,
                                ponieważ program Therm jest w języku angielskim.
                            </p>
                            <p>
                                2. Komputer z systemem Windows w wersji nie niższej niż 7 oraz zainstalowanym arkuszem kalkulacyjnym Microsoft Excel z dostępem
                                do programu Therm, aby móc aktywnie uczestniczyć w praktycznych zajęciach.
                            </p>
                        </>
                    }
                    noBorder
                    textEnd={
                        <>
                            <h3>Forma zgłoszenia uczestnictwa</h3>
                            <p>
                                1. Aby wziąć udział w szkoleniu, należy wysłać email <BiEnvelope /> na adres <a href={`mailto:pibp@pibp.pl`}>pibp@pibp.pl</a>{' '}
                                lub <a href={`mailto:info@pibp.pl`}>info@pibp.pl</a>
                            </p>
                            <p>
                                2. W temacie prosimy wpisać: <strong>&quot;Szkolenie Mostki - 25 - 26 czerwca 2024&quot;</strong>.
                            </p>
                            <p>
                                W treści prosimy o pozostawienie swoich danych tj.:
                                <ul className="mostki-signup">
                                    <li>Imię i nazwisko uczestnika</li>
                                    <li>Kompletne i aktualne dane do faktury nie zapominając o numerze NIP</li>
                                    <li>Opcjonalnie nr telefonu: na potrzeby supportu szkolenia</li>
                                </ul>
                            </p>
                        </>
                    }
                />
                <ContainerColumn
                    textStart={
                        <>
                            <p className="faq">
                                <Faq
                                    text="FAQ – Często zadawane pytania"
                                    className="faq-button"
                                    content={
                                        <p>
                                            <ul className="faq-ul">
                                                <Question
                                                    question="Co to jest mostek termiczny? Krótka definicja."
                                                    answer="Mostek termiczny to droga, przez którą ciepło jest przekazywane między dwiema powierzchniami, co powoduje
                                                    utratę lub zysk ciepła."
                                                />

                                                <Question
                                                    question="Jak mostki termiczne wpływają na efektywność energetyczną?"
                                                    answer="Mostki termiczne mogą znacznie zmniejszyć efektywność energetyczną budynku, umożliwiając ucieczkę ciepła
                                                    zimą i przedostawanie się ciepła do budynku latem, co prowadzi do zwiększonych kosztów ogrzewania i
                                                    chłodzenia."
                                                />

                                                <Question
                                                    question="Jakie są typowe przykłady mostków termicznych w budynkach?"
                                                    answer={
                                                        <>
                                                            <p>
                                                                Typowymi przykładami mostków termicznych są stalowe kołki w ścianach, połączenie balkonu ze
                                                                stropem, miejsca obsadzenia okien i drzwi, nadproża, fundamenty, połączenie stropu lub dachu ze
                                                                ścianą zewnętrzną. Zdjęcie obrazuje przykład mostka termicznego – styk ściany zewnętrznej z
                                                                płytą fundamentową co stanowi niekorzystną sytuację.
                                                            </p>
                                                        </>
                                                    }
                                                    imgSrc={szkolenieMostki2}
                                                />
                                                <Question
                                                    question="Jak znaleźć mostki termiczne w budynku?"
                                                    answer="Mostki termiczne można zidentyfikować za pomocą kamer termowizyjnych, termometrów na podczerwień lub przeprowadzając szczegółowy audyt energetyczny budynku."
                                                />
                                                <Question
                                                    question="Jaka jest różnica pomiędzy zewnętrznym i wewnętrznym mostkiem termicznym?"
                                                    answer="Zewnętrzny mostek termiczny występuje na styku powłoki budynku ze środowiskiem zewnętrznym,
                                                    podczas gdy wewnętrzny mostek termiczny występuje w samych elementach budynku."
                                                />
                                                <Question
                                                    question="Jak można zlikwidować lub zniwelować mostki termiczne?"
                                                    answer="Mostki termiczne można zmniejszyć, dodając warstwę ocieplenia, stosując materiały termoizolacyjne i poprawiając ogólną szczelność przegród zewnętrznych budynku. Dokładne opracowanie detali może skutecznie ograniczyć powstawanie liniowych mostków termicznych. Ważne jest prawidłowe zaplanowanie połączeń między poszczególnymi elementami budynku, co skutecznie ograniczy niekontrolowany odpływ ciepła."
                                                />
                                                <Question
                                                    question="Jakie są korzyści usunięcia mostków termicznych w budynku?"
                                                    answer="Likwidacja mostków termicznych w budynku prowadzi do poprawy efektywności energetycznej budynku przez zmniejszenie kosztów ogrzewania i chłodzenia, zwiększenia komfortu cieplnego mieszkańców i poprawy środowiska wewnętrznego. Brak mostków cieplnych sprzyja utrzymaniu dobrego stanu budynku - przeciwdziała jego degradacji a z nią związane jest powstawanie szkód budowlanych i generowanie dodatkowych kosztów związanych z modernizacją budynku."
                                                />
                                                <Question
                                                    question="Dom bez mostków termicznych. Czy jest to możliwe?"
                                                    imgSrc={szkolenieMostki3}
                                                    answer={
                                                        <div className="faq-question-multiple-sections">
                                                            <h5>
                                                                Fundamentalna zasada w właściwym projektowaniu budynków pasywnych to stworzenie ciągłej,
                                                                ocieplonej powłoki budynku.
                                                            </h5>
                                                            <p>
                                                                Koncepcja eliminacji mostków termicznych została rozwinięta w 1999 roku podczas obrad Grupy
                                                                roboczej ds. przystępnego finansowo budownictwa pasywnego. Podstawowe założenia oraz
                                                                udokumentowane przykłady rozwiązań zostały przedstawione w specjalnym opracowaniu. Wszystkie
                                                                prezentowane tam założenia są nadal aktualne. Już wtedy określono uproszczone kryterium dla
                                                                &quot;połączeń bez mostków termicznych&quot;, co znacznie ułatwiło planowanie i budowę:{' '}
                                                                <i>Ψ ≤ 0,01 W/(mK) [kryterium mostka termicznego]</i>
                                                            </p>
                                                            <p>
                                                                Budowanie bez mostków termicznych okazało się być jedną z kluczowych zasad planowania budynków
                                                                pasywnych. Budownictwo pasywne wykracza daleko poza domy pasywne jednorodzinne. Od 15 lat
                                                                skutecznie realizowane są ogromne projekty budynków pasywnych, takie jak hale sportowe,
                                                                produkcyjne, szkoły, biura i szpitale.
                                                            </p>
                                                        </div>
                                                    }
                                                />
                                            </ul>
                                        </p>
                                    }
                                />
                            </p>
                        </>
                    }
                    colorCream
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query ThermalBridges {
        heroImage: file(relativePath: { eq: "heroImages/hero_workshops.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
