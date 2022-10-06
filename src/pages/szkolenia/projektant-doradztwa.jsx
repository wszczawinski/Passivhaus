import React from 'react';
import { graphql } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import {
    Button,
    ContainerColumn,
    ContainerRow,
    FullImageContainer,
    Layout,
} from '../../components';
import { heroText } from '../../constants/heroContent';

import szkolenia0 from '../../images/szkolenia/0.png';
import szkolenia1 from '../../images/szkolenia/1.png';
import szkolenia2 from '../../images/szkolenia/2.png';
import szkolenia4 from '../../images/szkolenia/4.png';
import szkolenia5 from '../../images/szkolenia/5.png';
import szkolenia6 from '../../images/szkolenia/6.png';
import ekspert from '../../images/szkolenia/expert.png';
import cennik from '../../images/szkolenia/cennik.png';
import exam from '../../images/szkolenia/exam.png';

import './Workshops.scss';

export default function ProjektantDoradztwo({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.workshopsProjektant}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Kurs CEPHd – geneza i założenia</h3>
                            Koncepcja budynku pasywnego prześciga obowiązujące obecnie normy i
                            standardy budowlane. Certyfikowani projektanci i doradcy już w fazie
                            projektowej (i coraz częściej koncepcyjnej) dbają o zachowanie standardu
                            pasywnego. W dalszej kolejności kompetentni wykonawcy muszą zadbać o
                            zachowanie założeń projektowych na wszystkich etapach prowadzonych prac
                            budowlanych.
                            <br />
                            Wiele osób wśród potencjalnych inwestorów a nawet osób na z branży
                            budowlanej zapomina, że u podstaw koncepcji budownictwa pasywnego leży
                            nie tylko komfort i energooszczędność , ale również przystępność cenowa.
                            W obecnych czasach szeroka dostępność rozwiązań technicznych sprawia, że
                            spełnienie dwóch pierwszych wymagań jest stosunkowe proste.
                            <br />
                            Nasi trenerzy podczas warsztatów kładą dodatkowo nacisk na naukę
                            projektowania budynków, które będą ekonomicznie uzasadnione, a więc nie
                            za drogie w budowie i co najważniejsze w czasach recesji odporne na
                            podwyżki cen energii.
                        </p>
                    }
                    imgSrc={szkolenia0}
                    alt="szkolenia0"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <strong>Polski Instytut Budownictwa Pasywnego (PiBP)</strong> jest
                            odpowiedzialny za wprowadzenie standardu budownictwa pasywnego do Polski
                            we wczesnych latach XXI wieku. Dotychczasowe doświadczenie nauczyło nas,
                            że zaprojektowanie i wykonanie budynku spełniającego jednocześnie
                            wszystkie wspomniane wcześniej wymagania jest w obecnej rzeczywistości
                            bardzo cenioną usługą.
                        </p>
                    }
                    textEnd={
                        <p>
                            Założyciel i patron PiBP śp. Dipl. Ing. Gunter Schlagowski rozpoczął
                            upowszechnianie pojęcia „dom pasywny” już w połowie lat 90-tych,
                            niedługo po realizacji pierwszego na świcie, opomiarowanego budynku
                            pasywnego w Darmstadt (Niemcy), który powstał w 1991 r. W chwili obecnej
                            fraza „budynek (dom) pasywny” jest już znana na całym świecie i
                            utożsamiana w branży z budynkiem o najwyższej, powszechnie dostępnej
                            jakości. Pojęcie to nie było prawnie chronione więc szybko padło łupem
                            nieuczciwych marketingowców. Po dziś dzień wiele firm całkowicie
                            bezpodstawnie przypisuje to miano oferowanym przez siebie projektom lub
                            budynkom o niezbyt wysokiej faktycznej energooszczędności –
                            niesprawdzonej . Takie praktyki podkopują wiarygodność i wyrządzają
                            szkodę innym firmom, które często bez wielkiego rozgłosu wprowadzają
                            godne naśladowania praktyki - projektując i wykonując na terenie naszego
                            kraju rzeczywiście pasywne budynki np. potwierdzone certyfikatem.
                        </p>
                    }
                    imgSrc={szkolenia1}
                    alt="szkolenia1"
                    shortBorder
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            Certyfikacja budynków pasywnych (w Europie od ponad 20 lat) została
                            stworzona, aby rozróżnić prawdziwe budynki pasywne od tych, które tylko
                            do tego bezpodstawnie aspirują. Polski Instytut Budownictwa Pasywnego na
                            zlecenie Passivhaus Institut w Darmstadt kilka lat temu wprowadził
                            certyfikację uczestników procesu budowlanego m. in. projektantów
                            (CEPHdesigners) i doradców (CEPHconsultants).
                            <br />
                            Cel jest podobny jak w przypadku certyfikacji budynków - wskazanie
                            kompetentnych osób, które potencjalnie są w stanie wykonać usługę na
                            wymaganym poziomie a więc posiadają odpowiednią wiedzę i umiejętności z
                            zakresu budownictwa pasywnego, tym samym wyodrębnienie ich spośród wielu
                            takich, które nadużywają technik marketingowych.
                        </p>
                    }
                    textEnd={<p></p>}
                    imgSrc={szkolenia2}
                    alt="szkolenia2"
                    shortBorder
                    noBorder
                    smallPadding
                    colorCream
                />
                <ContainerRow
                    text={
                        <p>
                            Certyfikacja projektantów i doradców ma charakter dobrowolny. Zdarza
                            się, że osoby nie posiadające certyfikatu Certified Passive House
                            Designer (CEPHd) projektują świetnie budynki pasywne, które są
                            skutecznie poddawane certyfikacji. Z drugiej strony aby budynek mógł
                            uzyskać certyfikat nie wystarczy, że zaprojektuje go osoba posiadająca
                            certyfikat. Dla każdego budynku, który ma otrzymać c certyfikat należy
                            wykazać odpowiednio wysoki poziom jakości projektowania i na ostatnim
                            etapie potwierdzić wytyczne projektowe rzetelnym wykonawstwem.
                            <br />
                            <br />
                            Kurs Certified Passive House Designer – Certifikowany Projektant Doradca
                            Budownictwa Pasywnego został opracowany przez Passivhaus Institut w
                            Darmstadt (PHI). Za realizację tego doskonalenia w Polsce jest
                            odpowiedzialny Polski Instytut Budownictwa Pasywnego (PiBP). W celu
                            skutecznego nauczania w Polsce treść kursu została dostosowana i
                            przetłumaczona na język Polski. Poszczególne etapy kursu są prowadzone
                            przez najbardziej doświadczonych ekspertów w Polsce. 81 h zegarowych
                            kursu ma za zadanie dostarczyć wiedzę z zakresu budownictwa pasywnego
                            znacznie przekraczającą możliwości ramowych planów nauczania w polskim
                            szkolnictwie. Uczestnictwo w kursie CEPHd to możliwość uzyskania w
                            pierwszej fazie teoretycznej w drugiej fazie praktycznej wiedzy, ale dla
                            wielu i unikalnej, ze względu na autorskie rady i rozwiązania wynikające
                            z doświadczenia naszych trenerów.
                        </p>
                    }
                    imgSrc={szkolenia4}
                    alt="szkolenie4"
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            Na kursie Certified Passive House Designer |Consultant poznasz
                            szczegółowo zasady projektowania budynków pasywnych. Wytłumaczymy,
                            dlaczego budownictwo pasywne jest znacznie korzystniejsze w obecnych
                            czasach niż budynki powszechnie realizowane. Bardziej zaawansowani
                            uczestnicy np. posiadający swój wkład w realizację projektów pasywnych i
                            energooszczędnych przez udział w kursie zyskują okazję do poszerzenia w
                            znacznym stopniu swojej wiedzy i umiejętności np. z zakresu integracji
                            standardu pasywnego z każdym projektem czy konsultowanym projektem.
                            Wielu z naszych dotychczasowych absolwentów przed decyzją o udziale w
                            tym doskonaleniu nie zdawało sobie sprawy, jak elastyczne może (i
                            powinno) być ich podejście projektowe, spełniając jednocześnie: kryteria
                            standardu pasywnego, realizując potrzeby swoich klientów, podnosząc
                            swoje kwalifikacje i przy tym wszystkim satysfakcjonująco zarabiając
                            gdyż wysoka jakość usługi doradczo-projektowej dla uświadomionego i
                            zadowolonego inwestora z czasem staje się bezcenna.
                        </p>
                    }
                    textEnd={
                        <p>
                            Standard budownictwa pasywnego jest rozwijany przez trzy dekady. Zasady
                            i kryteria budownictwa pasywnego współgrają ze sobą, aby architekci
                            mogli planować komfortowe, wydajne, odporne, zdrowe i zawsze tanie w
                            utrzymaniu budynki. Jest to standard budowlany, najbardziej ze
                            wszystkich standardów odporny na zmiany cen energii, dzięki temu efekty
                            pracy certyfikowanych architektów są bardziej doceniane przez inwestorów
                            zarówno tych prywatnych jak i publicznych.
                        </p>
                    }
                    imgSrc={szkolenia5}
                    alt="szkolenia5"
                />
                <FullImageContainer image={ekspert} />
                <ContainerColumn
                    textStart={
                        <p className="bullets">
                            <h3>Najważniejsze zagadnienia – zakres tematyczny szkolenia</h3>
                            <ul>
                                <li>
                                    Czym jest budownictwo pasywne, dlaczego budować obiekty pasywne?
                                </li>
                                <li>
                                    Zasady konstrukcji dla budynków hermetycznych i wolnych od
                                    mostków termicznych
                                </li>
                                <li>Okno: niezbędny komponent (element) budownictwa pasywnego</li>
                                <li>Komfortowa wentylacja z wysoce wydajnym odzyskiem ciepła</li>
                                <li>Koncepcje dla minimalnego ogrzewania i ciepłej wody</li>
                                <li>
                                    Bilans energetyczny z PHPP (Pakiet do Projektowania Budownictwa
                                    Pasywnego)
                                </li>
                                <li>
                                    Środki wymagane do zapewnienia gwarancji, jakości budynków
                                    pasywnych
                                </li>
                                <li>Zrealizowane przykłady budynków - doświadczenia praktyczne</li>
                                <li>Definicja przegrody termiczne w projektowaniu</li>
                                <li>
                                    Wymagania dotyczące izolacji cieplnej, wilgotności i komfortu
                                </li>
                                <li>
                                    Obliczanie wartości współczynnika U, mostków termicznych i
                                    minimalnej temperatury powierzchni
                                </li>
                                <li>
                                    Przegląd istotnych obszarów pracy z PHPP (Pakiet do
                                    Projektowania Budynków Pasywnych)
                                </li>
                                <li>
                                    Przykłady konstrukcji dla zabudowań drewnianych, betonowych i
                                    mieszanych
                                </li>
                                <li>
                                    Wymagania, co do wartości współczynnika U i temperatury
                                    powierzchni
                                </li>
                                <li>Wpływ na komfort i wydajność grzewczą</li>
                                <li>Metody obliczeniowe okien: EN 10077 część 1 i 2</li>
                                <li>
                                    Komponenty: ramy, przeszklenia, krawędzie szkła, ochrona przed
                                    słońcem, okna dachowe
                                </li>
                                <li>Przykłady połączeń w zabudowaniach betonowych i drewnianych</li>
                                <li>
                                    Kryteria planowania szczegółowych połączeń szczelnych bez
                                    mostków termicznych
                                </li>
                                <li>
                                    Zadania: obliczanie wartości współczynnika U, szczegółowe
                                    opracowanie i dyskusja
                                </li>
                                <li>Dlaczego budynek pasywny potrzebuje systemu wentylacji?</li>
                                <li>Koncepcje wentylacji</li>
                                <li>Podział na strefy i rozmieszczenie natężenia przepływu</li>
                                <li>Komponenty do systemów wentylacji</li>
                                <li>
                                    Zadania: projekt systemu wentylacji i rozmieszczenia natężenia
                                    przepływu w domu jednorodzinnym
                                </li>
                                <li>Sterowanie, regulacja i uruchomienie systemu wentylacji</li>
                                <li>
                                    Zadanie: wyszukiwanie błędów w demonstracyjnym systemie
                                    wentylacji
                                </li>
                                <li>
                                    Cechy szczególne ogrzewania i ciepłej wody w budynkach pasywnych
                                </li>
                                <li>
                                    Obciążenie ciepła - definicja i kalkulacja w budynku pasywnym
                                </li>
                                <li>
                                    Koncepcje generowania ciepła: pompy cieplne, biomasa, paliwa
                                    kopalne
                                </li>
                                <li>
                                    Kompaktowe pompy cieplne do wentylacji, ogrzewania i ciepłej
                                    wody pitnej
                                </li>
                                <li>Rozmieszczenie ciepła</li>
                                <li>Zróżnicowanie temperatur w pojedynczych pokojach</li>
                                <li>
                                    Zadanie: projekt systemu generowania ciepła w budynku
                                    mieszkalnym
                                </li>
                                <li>Wprowadzenie w metodykę pracy z PHPP</li>
                                <li>Zasada bilansu cieplnego zgodnie z normą EN ISO 13790</li>
                                <li>Obszar zarządzania energią, powierzchnie kryte, wolumin</li>
                                <li>Straty ciepła poprzez transmisję</li>
                                <li>Zysk z ciepła słonecznego i wpływ zacienienia</li>
                                <li>Obliczanie strat ciepła w wentylacji</li>
                                <li>Wpływ szczelności budynku</li>
                                <li>
                                    Obliczanie rocznego zapotrzebowania na ciepło, obciążenie
                                    cieplne budynku
                                </li>
                                <li>
                                    Zapotrzebowanie na ciepłą wodę pitną, słoneczne ogrzewanie wody
                                </li>
                                <li>
                                    Charakterystyka energii pierwotnej dla ogrzewania, ciepłej wody,
                                    zapotrzebowania na zasilanie pomocnicze i energię elektryczną
                                    gospodarstw domowych
                                </li>
                                <li>
                                    Lato: chwilowe zacienienie, naturalna i mechaniczna wentylacja,
                                    obliczanie częstotliwości przegrzewania
                                </li>
                                <li>
                                    Podstawy ekonomicznego budynku pasywnego: czynniki wpływające na
                                    koszty budowy i eksploatacji
                                </li>
                                <li>
                                    Metody obliczania inwestycji: statyczna metoda amortyzacji,
                                    metoda NPV, metoda rentowa
                                </li>
                                <li>Zadania: przykłady obliczania za pomocą różnych metod</li>
                                <li>Ocena ekonomiczna przykładu budynku</li>
                                <li>
                                    Budownictwo pasywne w starych zabudowaniach: szanse, granice,
                                    ekonomiczność
                                </li>
                                <li>
                                    EnerPHit: europejskie kryteria dla modernizacji przy użyciu
                                    komponentów do budownictwa pasywnego
                                </li>
                                <li>
                                    Przykłady modernizacji z wykorzystaniem komponentów do
                                    budownictwa pasywnego
                                </li>
                                <li>
                                    Wytyczne planistyczne: kryteria budownictwa pasywnego i
                                    specyfikacje
                                </li>
                                <li>
                                    Zadanie do przetargu i wytycznych: przedmowy, zawartość,
                                    certyfikaty produktów
                                </li>
                                <li>Praktyczne przykłady wykonania budynków</li>
                                <li>Badania - próby ciśnieniowe i termografia z demonstracją</li>
                                <li>Kierownictwo budów, dokumentacja i procedury</li>
                                <li>Instruktaż wykonawców branż, użytkowników budynków</li>
                                <li>Obliczanie rentowności</li>
                                <li>Obliczenia do bilansu energetycznego</li>
                                <li>Projekt improwizowany budynku pasywnego</li>
                                <li>Planowanie systemu wentylacji</li>
                                <li>Repetytorium przygotowawcze pod kątem treści egzaminu CEPHd</li>
                            </ul>
                        </p>
                    }
                    shortBorder
                    colorCream
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Wymagania dla uczestnictwa w kursie CEPHd</h3>
                            <li>
                                bardzo dobra znajomość języka polskiego w mowie i piśmie – kurs
                                realizowany w języku polskim
                            </li>
                            <li>
                                brak formalnych ograniczeń, wystarczy zainteresowanie budownictwem i
                                chęć do rozwoju w zakresie, szeroko pojętego planowania projektów
                                budynków pasywnych; osoby zainteresowane zdobyciem tytułu CEPH
                                Designer \ Consultant powinny posiadać minimalne doświadczenie w
                                planowaniu, wykonywaniu lub nadzorowaniu projektów budowlanych
                                <br />
                                <i>
                                    * jeżeli nigdy nie pracowałeś nad projektem budowlanym i
                                    uważasz, że nie masz żadnego doświadczenia zalecamy rozpoczęcie
                                    nauki budownictwa pasywnego od szkolenia niższego szczebla{' '}
                                    <a href="">
                                        Certified Passive House Tradesperson ( Certyfikowany Mistrz
                                        \ Nadzorca Budownictwa Pasywnego)
                                    </a>
                                    .
                                </i>
                            </li>
                            <li>
                                ogólna znajomość pakietu Microsoft® Excel - nie wymagamy poziomu
                                zaawansowanego, ale tzw. „pewność w obsłudze arkusza kalkulacyjnego”
                                będzie mile widziana
                            </li>
                            <li>brak wymogu uprawnień budowlanych i konkretnego wykształcenia</li>
                        </p>
                    }
                    noBorder
                    textEnd={
                        <p>
                            <h3>Wymagania systemowe kursu CEPHd</h3>
                            Pakiet do projektowania domów pasywnych (PHPP) to oprogramowanie do
                            modelowania energii budynku, które służy do projektowania budynków
                            pasywnych. Jest ono integralną częścią procesu szkoleniowego CEPH
                            designer \ consultant. Program PHPP jest oparty na skoroszycie MS Excel
                            w formacie xlsx/xlsm. Microsoft Windows XP (lub nowszy) i Microsoft
                            Excel 2007 (lub nowszy) to wymagania systemowe.
                            <br />
                            <br />
                            <i>
                                Nieoficjalnie pakiet PHPP może być również używany z aktualnymi
                                wersjami OpenOffice lub LibreOffice, w systemach Linux i na
                                komputerach Macintosh. Jednak w zależności od używanych platform i
                                ich programowania, może być ograniczona funkcjonalność narzędzia
                                obliczeniowego lub makr narzędzia dodatkowego.
                            </i>
                        </p>
                    }
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h2 className="for-who">Dla kogo jest kurs CEPHd?</h2>
                        </p>
                    }
                    colorCream
                    noBorder
                />
                <div className="workshop__icons">
                    <div className="workshop__icons--row">
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/architect.png" />
                            <p>Architekci</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/power.png" />
                            <p>Doradcy energetyczni</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/inspector.png" />
                            <p>Nadzór \ Kierownicy</p>
                        </span>
                    </div>
                    <div className="workshop__icons--row">
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/engineer.png" />
                            <p>Inżynierowie</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/factory.png" />
                            <p>Producenci</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/office.png" />
                            <p>Pracownicy administracji publicznej – samorządowej</p>
                        </span>
                        <span className="workshop__icons--single-icon">
                            <StaticImage src="../../images/szkolenia/teacher.png" />
                            <p>Nauczyciele</p>
                        </span>
                    </div>
                </div>
                <ContainerColumn
                    textStart={
                        <p className="bullets">
                            <h3>Zalety kursu CEPHd</h3>
                            Pod okiem naszych ekspertów nauczysz się projektować energooszczędne i
                            optymalne pod względem kosztów budynki na całym świecie i zostaniesz
                            Certyfikowanym Projektantem Domów Pasywnych / Konsultantem.
                            <ul>
                                <li>
                                    <strong>Akredytowane materiały</strong>
                                    <br />
                                    Podczas realizowanych przez nas kursów przekazujemy uczestnikom
                                    akredytowane materiały opracowane przez Passivhaus Institut w
                                    Darmstadt czyli podmiot, który stworzył koncepcję budownictwa
                                    pasywnego a następnie sformułował dla niego kryteria, dzięki
                                    czemu do dnia dzisiejszego budownictwo pasywne jest jedynym,
                                    uznanym na całym świecie standardem energetycznym, zorientowanym
                                    na wydajność w budownictwie. Nasze materiały zostały dodatkowo
                                    dostosowane do europejskich standardów w języku polskim.
                                </li>
                                <li>
                                    <strong>Pionierska kadra trenerska</strong>
                                    <br /> Jesteśmy najbardziej doświadczonym zespołem trenerów w
                                    Polsce. Byliśmy jednymi z pierwszych osób przeszkolonymi przez
                                    Dipl. Ing. Guntera Schlagowskiego. Każdy z naszych trenów cały
                                    czas jest aktywnym w branży. Nasi trenerzy są projektantami
                                    wielu pionierskich budynków pasywnych w Polsce, począwszy od
                                    budynków mieszkalnych przez obiekty użyteczności publicznej;
                                    przedszkola, hale, biurowce po ośrodki zdrowia czy kościoły.
                                </li>
                                <li>
                                    <strong>Międzynarodowe uznanie</strong>
                                    <br /> Certyfikat CEPHd to ustandaryzowana kwalifikacja dla
                                    architektów i konsultantów, której ranga obejmuje cały świat.
                                    Uzyskanie tytułu Certified Passive House Designer \ Consultant –
                                    certyfikowany Projektant lub Doradca Budownictwa Pasywnego
                                    skutkuje wpisem na <strong>międzynarodową listę</strong>{' '}
                                    certyfikowanych specjalistów.
                                </li>
                                <li>
                                    <strong>Pełne zaangażowanie</strong>
                                    <br />
                                    Nasi trenerzy są do dyspozycji przez cały czas trwania kursu,
                                    aby odpowiedzieć na Twoje pytania. Polski program kursu CEPHd
                                    wymaga minimum 9 pełnych dni (81 h zegarowych). Korzystając z
                                    możliwości prowadzenia zajęć w trybie tradycyjnym – stacjonarnym
                                    jesteśmy w stanie utrzymać najwyższy poziom nauczania, oferując
                                    każdemu z uczestników znaczące doświadczenia edukacyjne z
                                    zakresu planowania budynków pasywnych.
                                </li>
                                <li>
                                    <strong>Korzyści finansowe</strong>
                                    <br />
                                    Każdy z absolwentów otrzymuje 10% zniżki na produkty i usługi
                                    PIBP oraz Akademii Zdrowego Budownictwa GreenCherry
                                </li>
                            </ul>
                        </p>
                    }
                    noBorder
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h2>Terminy najbliższej edycji kursu CEPHd</h2>
                        </p>
                    }
                    noBorder
                    imgSrc={cennik}
                    alt="cennik"
                    colorCream
                    textEnd={
                        <p>
                            Na koszt uczestnictwa w kursie CEPH składa się udział w szkoleniu wraz z
                            wyżywieniem i dedykowanymi dla każdego uczestnika materiałami
                            szkoleniowymi: najnowsza polska wersja oprogramowania PHPP, podręcznik
                            PHPP, segregator z materiałami szkoleniowymi. Powyższa cena nie obejmuje
                            kosztów dojazdu i zakwaterowania - noclegów.
                        </p>
                    }
                />
                <FullImageContainer image={exam} />
                <ContainerColumn
                    textStart={
                        <p>
                            <h2>Egzamin</h2>
                            Pomyślne zdanie egzaminu oznacza przyznanie uczestnikowi szkolenia
                            tytułu Certyfikowanego Europejskiego Projektanta / Doradcy Budownictwa
                            Pasywnego zgodnie z regulaminem egzaminacyjnym Instytutu Budownictwa
                            Pasywnego w Darmstadt. Kurs można alternatywnie zakończyć bez
                            uczestnictwa w egzaminie (bez certyfikatu). Po pomyślnym egzaminie
                            następuje wpis na polską i międzynarodową listę Certyfikowanych
                            Projektantów i Doradców. Istnieje również możliwość przystąpienia do
                            egzaminu bez uprzedniego udziału w kursie. W tym przypadku cena za
                            egzamin wynosi 5000 PLN netto.
                            <br />
                            <br />W Polsce egzaminy przeprowadzane są przez PIBP w imieniu PHI. Ich
                            korekta jest wielostopniowa i odbywa się zarówno w Polsce jak i w
                            Niemczech. Okres od przeprowadzenia egzaminu do momentu ogłoszenia
                            wyników jest różny i wynosić może od 3 do 6 miesięcy. Wynika to z faktu,
                            że egzaminy odbywają się jednocześnie w całej Europie i korygowane są
                            zbiorczo w wyznaczonych terminach wg ustalonego harmonogramu.
                            <br />
                            <br />
                            Absolutnym wymogiem jest przekazanie egzaminatorowi w dniu egzaminu
                            wniosku (załącznik II) o dopuszczenie do egzaminu „Certyfikowany
                            Projektant/Doradca Budownictwa Pasywnego”) i akceptacja tym samym
                            warunków regulaminu egzaminacyjnego składając własnoręczny podpis.
                            Podpisany dokument przekazywany jest wraz z oryginałem karty odpowiedzi
                            do PHI. Jedynym obowiązującym dokumentem regulaminu w każdym momencie
                            jest oryginalny regulamin, który zawsze znajduje się na stronie głównego
                            instytutu budownictwa pasywnego PHI Darmstadt PIBP nie ponosi
                            odpowiedzialności za ewentualne błędy w tłumaczeniach pliku „examination
                            regulations”. Wszelki aktualne i przyszłe tłumaczenia powinny być
                            traktowane jako dodatkowa pomoc dla osób nie znających języka
                            angielskiego lub niemieckiego. W przypadku wątpliwości zawsze należy
                            odnosić się do dokumentów umieszczonych na stronie głównego instytutu
                            budownictwa pasywnego w Darmstadt.
                            <h3>
                                Ukończenie egzaminu CEPHd wynikiem pozytywnym jest potwierdzeniem
                                zdobycia wymaganej wiedzy oraz możliwością skutecznego promowania
                                własnej osoby lub całej firmy, w której jest się zatrudnionym w
                                oparciu o autorytet Polskiego i Niemieckiego Instytutu Budownictwa
                                Pasywnego.
                            </h3>
                        </p>
                    }
                    noBorder
                    colorCream
                />
                <Button textContent={'Workshops button'} />{' '}
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query WorkQuery4 {
        heroImage: file(relativePath: { eq: "heroImages/hero_cephd.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
