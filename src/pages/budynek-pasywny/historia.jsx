import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, ContainerColumn, ContainerBlue } from '../../components';
import { heroText } from '../../constants/heroContent';

import historia1 from '../../images/budynek-pasywny/historia1.jpeg';
import historia2 from '../../images/budynek-pasywny/historia2.jpeg';
import historia3 from '../../images/budynek-pasywny/historia3.jpeg';
import historia4 from '../../images/budynek-pasywny/historia4.jpeg';
import historia5 from '../../images/budynek-pasywny/historia5.jpeg';
import historia6 from '../../images/budynek-pasywny/historia6.jpeg';
import historia7 from '../../images/budynek-pasywny/historia7.jpeg';
import historia8 from '../../images/budynek-pasywny/historia8.jpeg';
import historia9 from '../../images/budynek-pasywny/historia9.jpeg';
import historia10 from '../../images/budynek-pasywny/historia10.jpeg';
import historia11 from '../../images/budynek-pasywny/historia11.jpeg';
import historia12 from '../../images/budynek-pasywny/historia12.jpeg';

import './Passivhaus.scss';

export default function Historia({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.passivhausHistoria}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerBlue
                    text={
                        <p>
                            Kiedy zbudowano pierwszy budynek pasywny? Kto wynalazł budownictwo
                            pasywne? Czy "budownictwo pasywne" to nowa nazwa dla "super-izolowanych
                            budynków"? Oto kilka uwag do tego, oczywiście niepełnych, ale zapewnią
                            trochę jasności.
                        </p>
                    }
                    borderBottom
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Tradycyjne budynki pasywne</h3> Tradycyjny budynek w południowej
                            części Chin. W tym klimacie głównym zadaniem jest chłodzenie latem;
                            budynki mieszkalne nie wymagają ogrzewania. W wielu klimatach na świecie
                            nie potrzeba żadnego ogrzewania ani aktywnego chłodzenia, jeśli buduje
                            się nieco „rozsądnie” (części Iranu, wybrzeża Portugalii, południowej
                            części Chin, ...). Zawsze były budowane "budynki pasywne", choć nie były
                            jako takie klasyfikowane. Zrobił to Bo Adamson (1990), a kwestii, czy
                            może zostać to przeniesione z rozsądnymi technicznymi środkami do
                            Europy, powstała idea projektu badawczego „budynki pasywne”. Zobacz
                            [Adamson 1992]
                        </p>
                    }
                    imgSrc={historia1}
                    alt="historia1"
                    shortBorder
                    smallPadding
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Tradycyjne budynki pasywne w Islandii</h3>
                            Torfowe domy w Islandii. W Islandii w średniowieczu, po kryzysie drewna
                            opałowego, utworzono tradycję "torfowej metody budowy". Były to domy
                            pasywne, choć bez odpowiednich okien i bez odpowiedniej wentylacji.
                            Kryzys drewna opałowego: W 17. i 18. Drewna pozostało bardzo mało z
                            powodu nadmiernej eksploatacji lasów w Europie. Rozwiązaniem tutaj było
                            wydobycie węgla. Ale nie w Islandii. Potrzeba jest matką wynalazku:
                            Islandczycy szybko zorientowali się, że dobrze zaizolowanych domy same z
                            siebie utrzymują ciepło.
                        </p>
                    }
                    imgSrc={historia2}
                    alt="historia2"
                    shortBorder
                    smallPadding
                    colorCream
                    noBorder
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Statek badawczy „Fram” był konstrukcją pasywną!</h3>
                            "Fram", statek polarny Fridtjofa Nansena, był konstrukcją pasywną (1883)
                            Pierwszą prawdziwie funkcjonalną i pełnowartościową konstrukcją pasywną
                            nie było dom, ale statek: „Fram” Fritjofa Nansena (1883). On sam pisze:
                            "... Ściany są pokryte asfaltowym filcem, postępuje napełnianie korka,
                            potem boazeria z drewna jodłowego, a następnie gruba warstwa filcu,
                            następnie hermetyczne linoleum i wreszcie ponownie boazeria. Sufity ...
                            mają w sumie grubość około 40cm. Okno, przez które zimno szczególnie
                            łatwo mogłoby wnikać, zostało zabezpieczone trzema szybami i w inny
                            sposób. (Tutaj) jest ciepłe, przytulne miejsce na pobyt. Nieważne, czy
                            na termometrze jest 5° czy 30° poniżej zera, w piecu nie ma ognia.
                            Wentylacja jest doskonała, ... ponieważ przez wentylator do środka
                            dostaje się świeże zimowe powietrze. Jestem myśli, żeby całkowicie
                            pozbyć się pieca; on jest tylko przy okazji. (Z Nansen: „Noc i lód”
                            1887)
                        </p>
                    }
                    imgSrc={historia3}
                    alt="historia3"
                    shortBorder
                    smallPadding
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>
                                Systematyczne badania: Vagn Korsgaard i DTH - dom o zerowym zużyciu
                                energii
                            </h3>
                            DTH - dom o zerowym zużyciu energii na terenie kampusu w Kopenhadze.
                            Nawet "DTH - dom o zerowym zużyciu energii" prof Vagn Korsgaarda
                            (Kopenhaga, 1973) był budynkiem pasywnym. Na Politechnice Duńskiej były
                            systematycznie przeprowadzane symulacje, zostały zoptymalizowane wzory i
                            wreszcie zbudowano pierwszy taki dom. Następnie obiekt ten przez wiele
                            lat wykorzystywany był jako dom gościnny uniwersytetu. Jednakże: aktywna
                            technika pozyskiwania energii ze słońca po uszkodzeniach nie została
                            odnowiona. Cel „budynku o zerowym zużyciu energii” został w rezultacie
                            dzięki DTH odnowiony, na korzyść „budownictwa o niskim zapotrzebowaniu
                            energetycznym”. Zobacz [Korsgaard et al 1978] . Doświadczenie zdobyte
                            podczas tego projektu wpłynęło na badania nad budownictwem pasywnym od
                            samego początku.
                        </p>
                    }
                    imgSrc={historia4}
                    alt="historia4"
                    shortBorder
                    smallPadding
                    colorCream
                    noBorder
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>
                                Systematyczna prace w Niemczech: Hörsteri Steinmüller z
                                eksperymentalnym domem Philips.
                            </h3>
                            Dom Philips – dom eksperymentalny (z Horster) Równolegle do
                            skandynawskiego i amerykańskiego rozwoju, zostały w Niemczech
                            przeprowadzone, przez H. Horstera (lider grupy), B. Steinmüllera (modele
                            budowlane i symulacje) oraz innych pracowników, systematyczne badania na
                            temat energooszczędnych budynków, finansowanego ze środków Ministerstwa
                            ds. badań. Doskonale ocieplony dom eksperymentalny, zbudowany w 1974/75,
                            wyposażony w geotermalny wymiennik ciepła, kontrolowaną wentylację,
                            technologię solarną i pomp ciepła, "zamieszkały" przez komputer, służył
                            jako obiekt testowy i porównawczy dla modeli komputerowych, które były
                            wykorzystywane w celu zbadania możliwości wydajności energetycznej i
                            wykorzystania odnawialnych źródeł energii. Badania te wykazały, że 10-20
                            krotne oszczędności energii w Europie i Ameryce mogą byćz realizowane
                            wyłącznie za pomocą środków pasywnych. W ten sposób przedstawili dowody
                            na to, że środki te są ważnym krokiem na drodze do energooszczędnych
                            budynków.
                        </p>
                    }
                    textEnd={
                        <p>
                            Doświadczenie zdobyte przy tym projekcie było zaangażowane od początku w
                            badania nad budownictwem pasywnym. Doświadczenia z tego projektu było
                            również od samego początku zaangażowane w badania nad budownictwem
                            pasywnym. Czytaj więcej: PHILIPS dom eksperymentalny: Badanie 1974ff:
                            pasywny kontra aktywnych działań w Europie i Ameryce. Zobacz [Hörster
                            1980].
                        </p>
                    }
                    imgSrc={historia5}
                    alt="historia5"
                    shortBorder
                    noBorder
                    smallPadding
                    borderEnd
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>
                                Pionierzy w Ameryce Północnej: William A. Shurcliff i Wane Shick
                            </h3>
                            Cała rzesza zmian rozwojowych w Ameryce Północnej w późnych latach 70. i
                            na początku lat 80. ("superizolowane domy") były bardzo bliskie
                            budownictwu pasywnemu. William A. Shurcliff (1981) jest autorem wielu
                            publikacji na ten temat. Prace te były ważną podstawą
                            niskoenergetycznych i pasywnych budynków w Europie. Zobacz [Shurcliff
                            1980] .
                        </p>
                    }
                    imgSrc={historia6}
                    alt="historia6"
                    shortBorder
                    smallPadding
                    colorCream
                    noBorder
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>
                                Budynek pasywny na 2164 m wysokości: Instytut Gór Skalistych Amory i
                                Huntera Lovins
                            </h3>
                            Amory Lovins, znany na całym świecie ze swoich publikacji na temat
                            alternatywnych ścieżek energetycznych, nie poprzestał na teorii. Na 2164
                            metrów nad poziomem morza zbudował on w Starym Snowmass, Colorado,
                            bardzo dobrze izolowany termicznie, a także pasywny i kozrsyający z
                            energii solarnej budynek. W ogrodzie zimowym rośnie tropikalną
                            roślinność, piec jest rzadko stosowany.
                        </p>
                    }
                    textEnd={
                        <p>
                            Te doświadczenia dały badaniom nad budownictwem pasywnym pewność i
                            bezpieczeństwo, że fizyka działa w praktyce. A. B. Lovins odwiedził w
                            1995 roku budynekpasywny w Darmstadt Kranichstein. Od Lovinsa padła
                            sugestia do realizacji budownictwa pasywnego nie tylko jako projektu
                            badawczego, ale jako rozwiązania dla standardu energetycznego
                            przyszłości. Zobacz [Lovins 1978], [Carlock 1985], [Weizsäcker, Lovins
                            1995] .
                        </p>
                    }
                    imgSrc={historia7}
                    alt="historia7"
                    shortBorder
                    noBorder
                    smallPadding
                    borderEnd
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>"Nulli" w Dörpe</h3>
                            "Dom o zerowym zużyciu energii" Erharda Wiers-Keisera i Stowarzyszenia
                            „Ekologiczny Warsztat przyszłości budynków o minimalnym i zerowym
                            zużyciu energii e.V." (1989) miał matematycznie mniejszy popyt niż
                            budynek pasywny, a w użyciu niestety wyższy poziom konsumpcji. Problemy
                            sprawiła szczelność( niepowiększona dokumentacja), wewnętrzne obciążenia
                            izolacyjne i technologia magazynowania energii słonecznej. Wieloletni
                            magazyn energii słonecznej w wysokości 10 m³ został później usunięty,
                            aby zrobić miejsce na fortepian. Dom jest jednak nadal używany - jak
                            "prawie budynek pasywny". Robert Borsch Laaks dokonał istotnych wkład w
                            rozwój szczegółów. Zobacz [Hinz 1994].
                        </p>
                    }
                    textEnd={
                        <p>
                            W projekt ten było zaangażowanych wiele grub badawczych budownictwa
                            pasywnego. Główne problemy w e wcześniejszych domach to:
                            <p>
                                - Ciągły brak świadomości o konieczności stałej szczelności. Wyniki
                                na ten temat zostały zebrane głównie w Szwecji. Profesor Arne
                                Elmroth jest jednym z najważniejszych pionierów w tej kwestii.
                            </p>
                            <p>
                                - Brak dobrych rozwiązań dla energooszczędnych okien (Lovins:
                                "Powinniśmy skorzystać z lepszej izolacji termicznej ramy
                                okiennej."). Tak więc, okna były często małe lub musiały być bogato
                                pokryte czasową izolacją. Oba były powodami, dla których podejście
                                nie zostało uwzględnione w dalszej perspektywie.
                            </p>
                            <p>
                                - Brak wiarygodności efektywności energetycznej zastosowanej
                                technologii. W wielu projektach doszło do skutku "technologicznej
                                choinki", skomplikowanej techniki, która w końcu nie działa wcale
                                lub nie działa na dłuższą metę.
                            </p>
                            Dalej należy wymienić osiągnięcia i doświadczenia wielu pionierów w
                            Szwajcarii (np. Conrad U. Brunner, Ruedi Kriesi i Josef Jenni) oraz w
                            Austrii (Helmut Krapmeier, Richard Caldonazzi, Sture Larsen).
                        </p>
                    }
                    imgSrc={historia8}
                    alt="historia8"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Budynki o super niskim zużyciu energii Hansa Eek</h3>
                            Ingolstadt-Halmstad: budynki o niskim zużyciu energii (30 kWh / (m²a)
                            zapotrzebowania na ciepło) w dwóch krajach architekta Hansa Eek (1985) W
                            Szwecji została wydeptana ścieżka "niskoenergetycznego budownictwa".
                            Doświadczenie w skomplikowanej, nierzetelnej technologii szybko zostało
                            zdobyte i nauczyło tam podstawowych rzeczy o: szczelności, bardzo dobrej
                            izolacji termicznej, dobrych oknach, niezawodnej wentylacji
                            mechanicznej.
                        </p>
                    }
                    textEnd={
                        <p>
                            Ważnym pionierem w Szwecji jest Hans Eek - jego historia życia
                            bezpośrednio odzwierciedla doświadczenia badań nad budownictwem: od
                            "technologicznej choinki" przez super niskoenergetyczne budownictwo do
                            budownictwa pasywnego. Na zdjęciu przedstawione są domy z
                            niemiecko-szwedzkiego projektu Ingolstadt-Halmstad. Domy te wprawdzie
                            nie są budynkami pasywnymi, ale do budynku pasywnego już tylko mały
                            krok. Hans Eek był i jest partnerem we wszystkich fazach rozwoju
                            budownictwa pasywnego.
                        </p>
                    }
                    imgSrc={historia9}
                    alt="historia9"
                    shortBorder
                    noBorder
                    smallPadding
                    borderEnd
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Energetycznie samowystarczalny budynek solarny we Freiburgu</h3>
                            Energetycznie samowystarczalny budynek solarny ISE we Freiburgu. Budynek
                            jest obecnie wykorzystywany jako budynek pasywny. "Energetycznie
                            samowystarczalny budynek słoneczny" (ISE, Fryburg 1991/92, Wilhelm
                            Stahl) został zbudowany praktycznie w tym samym czasie, co budynek
                            pasywny w Darmstadt. On także był bardzo blisko budynku pasywnego.
                            Częściowo bardzo skomplikowana, samowystarczalna technika dostarczania z
                            magazynem wodoru przestała działać po zakończeniu okresu pomiaru.
                        </p>
                    }
                    textEnd={
                        <p>
                            Pasywne techniki i odzysk ciepła okazały się bardzo skuteczne. Dziś ISE
                            testuje w tym budynku kompaktowe urządzenia cieplne pod względem ich
                            przydatności w warunkach praktycznych warunkach. Grupy budownictwa
                            pasywnego wymieniały się podczas budowy projektów z ISE i Wilhelmem
                            Stahlem i było to robione ze wzajemnym wsparciem.
                        </p>
                    }
                    imgSrc={historia10}
                    alt="historia10"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Dom pasywny w Darmstadt Kranichstein</h3>
                            Budynek pasywny w Darmstadt Kranichstein, Südaufnahme Zespół naukowców
                            zajmował się od 1988/1989 pod kierownictwem Wolfganga Feista "Projektem
                            badawczym przed rozpoczęciem budowy budynków pasywnych" - międzynarodową
                            współpracą, w którą zaangażowani byli również Bo Adamson i Gerd Hauser.
                            Systematycznie realizowane były badania, finansowane przez Landa
                            Hessena, warunków dla energooszczędnych domów oraz rozwijane i
                            przygotowywane prototypy nowych komponentów: i inne izolowane ramy
                            okienne, zredukowane mostki termiczne i wentylacje kontrolujące CO2.
                        </p>
                    }
                    textEnd={
                        <p>
                            Według planów prof. Bott / Ridder / Westermeyera w latach 1990/91
                            zostały wybudowane przez prywatną wspólnotę (firmę) budowlaną cztery
                            jednostki jednorodzinne. Domy te zamieszkiwane są normalne od 1991 r.
                            Towarzyszący program pomiarowy promuje wiedzę na temat wysoce
                            izolacyjnych komponentów, okien, wentylacji z odzyskiem ciepła,
                            zachowania użytkownika, jakości powietrza w pomieszczeniach, objętości
                            wewnętrznych źródeł ciepła i innych.
                        </p>
                    }
                    imgSrc={historia11}
                    alt="historia11"
                    shortBorder
                    noBorder
                    smallPadding
                    borderEnd
                />

                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Budynek pasywny Kranichstein, Nordaufnahme</h3>W normalnych
                            warunkach użytkowania, projekt ten potwierdził prawidłowe funkcjonowanie
                            wszystkich istotnych elementów - i to w nienaruszonym stanie do dziś.
                            Zmierzone zużycie energii dla ogrzewania jest stabilne od 15 lat i
                            wynosi mniej niż 10 kWh / (m²a), oszczędności w porównaniu do
                            tradycyjnych budynków wynoszą zatem ponad 90%. Przy tym została
                            zmierzona bardzo dobra jakość powietrza, a przez pomiary w i zapytania
                            do użytkowników potwierdzony został wysoki komfort cieplny.
                        </p>
                    }
                    textEnd={
                        <p>
                            Większość komponentów (np. izolowane ramy okienne) były w tym projekcie
                            indywidualnymi specjalnymi rozwiązaniami, ręcznie wykonanymi; których
                            prawidłowe funkcjonowanie zadecydowało o masowej produkcji komponentów
                            tej jakości.
                        </p>
                    }
                    imgSrc={historia12}
                    alt="historia12"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query PassQuery1 {
        heroImage: file(relativePath: { eq: "heroImages/hero_passivehouse.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
