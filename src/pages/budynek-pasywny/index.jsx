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
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>
                                Budynki pasywne to budynki, które prawie wcale nie muszą być
                                aktywnie ogrzewane.
                            </h3>
                            Budynki pasywne nie różnią się na pierwszy rzut oka od pozostałych
                            budynków. W porównaniu jednak z przeciętnym budynkiem mieszkalnym, dom
                            pasywny potrzebuje jedną ósmą energii cieplnej, a mianowicie 15kWh / m2
                            w skali roku względnie &lt; 1.5m3 gazu lub 5 kWh prądu z pompą ciepła.
                            Oszczędza się w ten sposób pieniądze tak długo, jak długo stoi i jest
                            użytkowany budynek.
                        </p>
                    }
                    imgSrc={charakterystyka4}
                    alt="charakterystyka4"
                    smallPadding
                    colorCream
                    noBorder
                    textEnd={
                        <p>
                            Budynek pasywny jest tak dobrze zaizolowany termicznie, że prawie przez
                            cały czas zachowuje komfortową temperaturę – „ciepło”.
                            <p>
                                Dzieje się tak, że owego ciepła, którego prawie budynek nie traci
                                nie trzeba uzupełniać. Przyjemna temperatura w budynkach pasywnych
                                osiągana jest w dużej mierze dzięki energii emitowanej przez słońce
                                oraz dzięki wewnętrznym źródłom ciepła, którymi są przebywający w
                                budynku ludzie i zwierzęta oraz zainstalowane urządzenia rtv, agd
                                itd. Dzięki temu zapotrzebowanie na ciepło do ogrzewania budynku w
                                sezonie zimowym jest tak niewielkie, że wystarczy budynek zaopatrzyć
                                w najprostsze systemy grzewcze. Reasumując zasada jest taka, że
                                ciepło pozostaje w budynku i nie musi być dostarczane w sposób
                                aktywny. (Dla porównania: zapotrzebowanie na paliwo grzewcze w skali
                                całego roku dla prawdziwego domu pasywnego (potwierdzonego
                                certyfikatem w standardzie Passive House Classic) o wielkości 120m2
                                nie przekroczy trzech pełnych tankowań średniej klasy samochodu !)
                            </p>
                            <p>
                                W technice zjawiska zachodzące pasywnie są często chętnie
                                wykorzystywane w celu pewnego i niezawodnego osiągnięcia celu.
                                Technicznie pojęcie „pasywny” odnoszące się m.in. do takich
                                strategii jak: „pasywne bezpieczeństwo”, „pasywne filtry”, „pasywne
                                chłodzenie” oraz „dom lub budynek pasywny” są udanymi przykładami
                                zastosowania tej zasady.
                            </p>
                            <p>
                                Oczywiście wszystkie te techniczne zastosowania są w dosłownym
                                znaczeniu wyłącznie „pasywne” – niezbędne jest dokonanie drobnych
                                zmian aby wykorzystać te procesy we właściwym celu. Nie chodzi o to
                                aby zdać się pasywnie na działanie pewnych sił, lecz o to aby
                                wykorzystać „zjawiska zachodzące pasywnie” do osiągnięcia
                                zamierzonego celu przy możliwie najmniejszym nakładzie tych sił. Aby
                                jednak budynek mógł w każdym momencie zachowywać komfortową
                                temperaturę niezbędne jest przestrzeganie kilku zasad już na etapie
                                projektowania budynku. Każdy inwestor, który realizuje nowy budynek
                                lub modernizuje stary nie korzystając z zasad i zasobów budownictwa
                                pasywnego, choćby z ekonomicznego punktu widzenia, trafił na złych
                                doradców.
                            </p>
                        </p>
                    }
                />

                <ContainerColumn
                    textStart={
                        <p>
                            <h3>1. Zwarta bryła budynku i bardzo dobra termoizolacja: </h3>
                            Najłatwiej osiągnąć standard pasywny jeżeli zaprojektowana bryła budynku
                            będzie zwarta i prosta z możliwie najmniejszą liczbą wykuszy, balkonów
                            etc. Każde odstępstwo od tej zasady utrudnia a co za tym idzie podraża
                            inwestycję. Zasada jest taka, że powierzchnia przegród w stosunku do
                            objętości (kubatury) budynku powinna być jak najmniejsza. Stosunek ten
                            określa współczynnik kształtu A/V. (Zazwyczaj wartość współczynnika
                            kształtu dla budynku pasywnego mieści się w przedziale od 0,75 do 1,2.)
                            <p>
                                Budynki pasywne należy projektować w taki sposób aby możliwym było
                                unikanie zarówno zbyt niskich temperatur jak i tych nadmiernych.
                                Dobre ocieplenie (izolacja o dobrych parametrach) będzie chronić nie
                                tylko przed chłodem, ale także zbyt dużym ciepłem w lecie, znacznie
                                bardziej niż w powrzechnie budowanych domach.{' '}
                            </p>
                            <p>
                                Ptaki puszą się gdy muszą chronić się przed zimnem. Powietrze
                                zamknięte w puchu chroni je przed wychłodzeniem. Zaawansowani,
                                profesjonalni wspinacze górscy mogą przy bardzo niskiej temperaturze
                                nocować w górach w bardzo dobrze ocieplonych puchowych śpiworach. W
                                takim przypadku ciepło ludzkiego ciała jest wystarczające.
                            </p>
                        </p>
                    }
                    imgSrc={charakterystyka4}
                    alt="charakterystyka4"
                    smallPadding
                    textEnd={
                        <p>
                                Budynki pasywne są z każdej strony mocno ocieplone, dlatego też,
                                dodatkowe ciepło wytwarzane przez cały rok przez mieszkańców i
                                urządzenia oraz darmowe zyski z promieniowania słońca wystarczą aby
                                w budynku utrzymało się ciepło. W prawidłowo zaprojektowanym i
                                wybudowanym domu bardzo dobre ocieplenie całej powłoki budynku
                                chroni również przed przegrzewaniem pomieszczeń w lecie. Przyjemny
                                klimat wewnątrz w okresie wiosenno- letnim wymaga również ochron
                                słonecznych w postaci np. żaluzji zewnętrznych. Mocne ocieplenie
                                sprawdza się we wszystkich typach budynków – niezależnie czy chodzi
                                o masywne budynki w technologii murowanej, konstrukcje żelbetowe,
                                domy drewniane, prefabrykaty czy wszystkie inne mieszane technologie
                                budowlane.
                            <p>
                                W domu pasywnym należy dążyć do uzyskania współczynnika U o wartości
                                0,1 W / (m²K). (Im mniejsza jest wartość współczynnika ‘U’ tym
                                mniejsza jest strata ciepła przez dany element. (Współczynnik
                                przenikalności cieplnej ‘U’ opisuje termiczne właściwości elementu
                                konstrukcyjnego. Podaje on jaka ilość ciepła na m² przy różnicy
                                temperatury o wartości 1 Kelvina przenika przez element
                                konstrukcyjny.
                            </p>
                            <p>
                                Wszystkie elementy zewnętrznych przegród budynku są izolowane
                                termicznie w takim stopniu, aby współczynnik ‘U’ całej bryły budynku
                                ze wszystkimi przegrodami zewnętrznymi w najgorszym wypadku nie
                                przekraczał wartości 0,15 W/(m2K) przy jednoczesnej eliminacji
                                wszystkich znaczących mostków cieplnych.
                            </p>
                        </p>
                    }
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Południowa orientacja i uwzględnienie problematyki zacieniania:</h3>
                            Pasywne wykorzystanie energii słonecznej jest znaczącym czynnikiem przy
                            projektowaniu budynku pasywnego. Południowa strona budynku ma za zadanie
                            pozyskanie możliwie największej ilości ciepła od słońca w sezonie
                            grzewczym.{' '}
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
        heroImage: file(relativePath: { eq: "heroImages/hero_passivehouse_police.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
