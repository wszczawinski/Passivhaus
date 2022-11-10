import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { Layout, ContainerColumn, ContainerBlue } from '../../components';
import { heroText } from '../../constants/heroContent';

import certyfikacja1 from '../../images/certyfikacja/certyfikacj1.png';
import certyfikacja2 from '../../images/certyfikacja/certyfikacj2.png';
import certyfikacja3 from '../../images/certyfikacja/certyfikacja3.png';
import certyfikacja4 from '../../images/certyfikacja/certyfikacja4.png';
import certyfikacja5 from '../../images/certyfikacja/certyfikacja5.jpeg';
import certyfikacja6 from '../../images/certyfikacja/certyfikacja6.png';
import certyfikacja7 from '../../images/certyfikacja/certyfikacja7.png';
import certyfikacja8 from '../../images/certyfikacja/certyfikacja8.png';
import certyfikacja9 from '../../images/certyfikacja/certyfikacja9.png';
import certyfikacja10 from '../../images/certyfikacja/certyfikacja10.png';
import certyfikacja11 from '../../images/certyfikacja/certyfikacja11.png';
import dolar from '../../images/certyfikacja/icons/money.svg';
import check from '../../images/certyfikacja/icons/check.svg';

import './Certification.scss';

export default function Certification({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.certyfikacja}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerColumn
                    textStart={
                        <>
                            <h3> Rzeczywiste potwierdzenie jakości wykonanych prac</h3>
                            <p className="certificate__main">
                                Świadomy klient powinien wymagać od projektanta lub wykonawcy
                                potwierdzenia, że zaprojektowany i zrealizowany budynek jest
                                rzeczywiście pasywny. To samo dotyczy starych budynków, poddawanych
                                termomodernizacji. Można takie obiekty certyfikować w oparciu o
                                kryteria budownictwa pasywnego tzn. z wykorzystaniem komponentów
                                pasywnych np. przez certyfikację 'EnerPHit'.
                            </p>
                        </>
                    }
                    imgSrc={certyfikacja1}
                    alt="certyfikacja1"
                    shortBorder
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Klasy budynków pasywnych</h3>
                            <p>
                                Wykorzystanie odnawialnych źródeł energii stanowi doskonałe
                                uzupełnienie efektywności standardowego budynku pasywnego. Podczas
                                certyfikacji budynku , oprócz standardowej klasy{' '}
                                <strong>'Classic'</strong> obiekt może zostać zakwalifikowany do
                                uzyskania jeszcze wyższej klasy tj. budynek pasywny{' '}
                                <strong>'Plus'</strong> lub <strong>'Premium'</strong>. Nadanie
                                konkretnej klasy jest uzależnione od ilości wytwarzanej przez
                                budynek energii np. dzięki zastosowaniu instalacji fotowoltaicznej.
                            </p>
                            <p>
                                Zapotrzebowanie na ciepło do ogrzewania we wszystkich tych klasach
                                nie może przekroczyć wartości <strong>15kWh / m2/ rok</strong>.
                                Kolejnym kryterium jest zapotrzebowanie na odnawialną „energię
                                pierwotną”:
                            </p>
                        </p>
                    }
                    textEnd={
                        <p>
                            <p>
                                1. W przypadku budynku pasywnego <strong>'Classic'</strong> wartość
                                ta wynosi maksymalnie 60kWh / m2/ rok.
                            </p>
                            <p>
                                2. Budynek pasywny <strong>'Plus'</strong> jest bardziej efektywny i
                                nie może zużywać więcej niż 45kWh/m2/rok. Ponadto w odniesieniu do
                                powierzchni jaką zajmuje powinien wytwarzać przynajmniej 60
                                kWh/m2/rok energii.
                            </p>
                            <p>
                                3. W przypadku budynku pasywnego <strong>'Premium'</strong>{' '}
                                zapotrzebowanie energetyczne ograniczone jest do 30kWh/m2/rok, a
                                wartość wytwarzanej energii powinna wynosić 120kWh/m2/rok.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja2}
                    alt="certyfikacja2"
                    smallPadding
                    colorCream
                    noBorder
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Korzyści wynikające z certyfikacji budynku</h3>
                            <p>
                                Budownictwo pasywne nie jest standardem budowlanym, który stanowią
                                krajowe przepisy budowlane lub inne nakazy. Jest to standard
                                budowlany, opracowany przez grupę niemieckich ekspertów, ponad 30
                                lat temu. Od samego początku standard ten miał być postrzegany jako
                                całkowicie dobrowolny, szczegółowy zbiór zdefiniowanych kryteriów.
                                Zamiast indywidualnie określonych szczegółów konstrukcyjnych lub
                                technicznych, wymaga się dokładnego projektowania z kompletnie
                                wykonanym bilansem energetycznym w programie PHPP na podstawie m.in.
                                szczegółowej dokumentacji zastosowanych w projekcie komponentów.
                                Takie podejście sprawia, że zaprojektowany i wybudowany zgodnie z
                                uprzednio zweryfikowaną dokumentacją PHPP budynek uzyska certyfikat
                                potwierdzający rzeczywistą klasę energooszczędności.
                            </p>
                        </p>
                    }
                    textEnd={
                        <p>
                            <p>
                                Zatem jedną z głównych korzyści certyfikacji jest zabezpieczenie
                                interesów inwestora . W centrum zainteresowania tutaj jest
                                planowanie, ponieważ tylko praktycznie zorientowane planowanie może
                                być przekształcone w dobrze funkcjonujący budynek. Szczelność, brak
                                mostków termicznych, wysokiej jakości okna i ich instalacja, system
                                wentylacyjny oraz inne usługi budowlane - wszystko to musi być
                                planowane i koordynowane ze sobą w ukierunkowanym podejściu
                                (integralne planowanie). Certyfikacja ma zapewnić dobrą jakość pracy
                                zespołu projektowego i wykonawczego.
                            </p>
                            <p>
                                W dobie kryzysu energetycznego na światowych rynkach wartość
                                budynków pasywnych znacznie wzrosła. Czy to nowo powstały budynek
                                czy stary, termo-modernizowany budynek do standardu pasywnego
                                zyskuje na wartości.
                            </p>
                            <p>
                                Budynek zapewniający tak wysoki komfort i jednocześnie tak tani w
                                utrzymaniu jest szczególnie atrakcyjny dla wszystkich odbiorców tj.
                                właścicieli, zarządców nieruchomości czy najemców. Takie budynku są
                                obecnie „łakomym kąskiem” pod wynajem lub sprzedaż.
                            </p>
                            <p>
                                Budynki pasywne stanowią nie tylko oszczędności dla portfeli w
                                ujęciu finansowym, ale stanowią doskonały sposób na walkę o ochroną
                                klimatu. W przypadku budynków starych poddawanych termomodernizacji
                                do standardu pasywnego ma to jeszcze większe znaczenie. Dlatego co
                                jakiś czas, na ten cel pojawiają się programy wsparcia finansowego
                                na poziomie regionalnym i krajowym. Dzięki temu w przyszłości
                                dodatkowego koszty inwestycyjne będą pokrywane na większą skalę nie
                                tylko z oszczędności energetycznych.
                            </p>
                            <p>
                                Certyfikacja niesie również korzyści dla architekta. Dzięki
                                dokładnemu zewnętrznemu audytowi jakim de facto jest weryfikacja
                                obliczeń PHPP na podstawie dokumentacji projektowej, zapobiega ona
                                błędom jeżeli zostanie wykonana przed rozpoczęciem budowy. Co więcej
                                zarówno architekt jak i wykonawca certyfikowanego budynku pasywnego
                                mogą zyskać wyższą rangę i uznanie na rynku inwestycji pasywnych.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja3}
                    alt="certyfikacja3"
                    shortBorder
                    noBorder
                    smallPadding
                    borderEnd
                />
                <ContainerColumn
                    textStartRow
                    textStart={
                        <p>
                            <h3>Certyfikat EnerPHit (modernizacja istniejących budynków)</h3>
                            <p>
                                Standard pasywny nie zawsze można osiągnąć przy zachowaniu
                                rozsądnych kosztów w przypadku renowacji budynków. Wynika to na
                                przykład z obecności mostków termicznych spowodowanych istniejącymi
                                ścianami piwnic. Dla takich przypadków został opracowany standard
                                EnerPHit.Certyfikat EnerPHit daje pewność, że dla danego budynku
                                wdrożono optymalną ochronę termiczną. Dzięki zastosowaniu
                                komponentów domów pasywnych budynki z certyfikatem EnerPHit oferują
                                mieszkańcom niemal wszystkie zalety standardu pasywnego przy
                                zachowaniu optymalnych kosztów renowacji.
                            </p>
                            <p>
                                Renowacja systemu EnerPHit obejmuje izolację podłogi, ścian
                                zewnętrznych i dachu, wymianę okien, doszczelnienie, montaż
                                rekuperacji. Jednym z najtrudniejszych etapów jest likwidacja lub
                                redukcja mostków termicznych do akceptowalnego poziomu.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja4}
                    alt="certyfikacja4"
                    shortBorder
                    smallPadding
                    colorCream
                    noBorder
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>
                                Certyfikat Low Energy Building (nowe budownictwo, dla trudnych
                                przypadków)
                            </h3>
                            <p className="certificate__main">
                                Standard PHI Low Energy Building jest odpowiedni dla budynków, które
                                z różnych powodów nie kwalifikują się do osiągnięcia najwyższego
                                poziomu energooszczędności. Standard budownictwa pasywnego może nie
                                zostać spełniony, gdy mamy do czynienia z np. małymi budynkami w
                                zimnych i zacienionych lokalizacjach; krajami, w których odpowiednie
                                komponenty do budowy pasywnej są nie dostępne ; błędami, do których
                                doszło na etapie projektowania lub wykonawstwa i w konsekwencji nie
                                zostaną spełnione wymagania zapotrzebowania na energię, szczelności
                                lub komfortu. są niższe niż w przypadku domu pasywnego. Wymagana
                                dokumentacja jest taka sama jak w przypadku budynków pasywnych,
                                dlatego można mieć pewność, że certyfikacja przełoży się na
                                rzeczywistą ocenę zapotrzebowania budynku na energię.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja5}
                    alt="certyfikacja5"
                    noBorder
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>
                                Podstawowe narzędzie do projektowania budynków pasywnych,
                                energooszczędnych i modernizacji
                            </h3>
                            <p>
                                Pakiet do projektowania domów pasywnych (PHPP) jest najważniejszym
                                narzędziem do modelowania energii budynku. Jest ono integralną
                                częścią procesu projektowania i certyfikacji budynków. Projekt
                                wykonawczy wraz z obliczeniami PHPP jest przedkładany do weryfikacji
                                ceryfikatorowi.
                            </p>
                            <p>
                                W największym skrócie PHPP umożliwia:
                                <br />- określanie najbardziej odpowiedniego kształtu budynku i
                                wpływu decyzji projektowych na efektywność energetyczną
                                <br />- obliczanie wymaganego poziomu wydajności poszczególnych
                                komponentów, takich jak izolacja ścian, okna itp. oraz ich wpływu na
                                bilans energetyczny budynku w okresie zimowym i letnim
                                <br />- obliczanie obciążenia grzewczego i chłodniczego
                                <br />- określanie wielkości i wymaganej wydajności układów
                                mechanicznych
                                <br />- obliczanie lokalnej produkcji energii ze źródeł odnawialnych
                                oraz zapotrzebowania na energię w budynkach zaspokajanego przez te
                                odnawialne źródła energii
                                <br />- obliczanie kosztów cyklu życia różnych opcji projektowych-
                                dokonanie oceny, czy budynek spełnia kryteria certyfikacji budynków
                                pasywnych
                            </p>
                            <p>
                                Dzięki temu można mieć pewność, że prognozowane zapotrzebowanie na
                                energię odzwierciedla rzeczywiste zużycie energii z najwyższą
                                dokładnością.
                            </p>
                        </p>
                    }
                    textEnd={
                        <p>
                            <p>
                                To, czy budynek spełnia standard energetyczny zdefiniowany przez
                                Passivhaus Institut w Darmstadt, jest zawsze weryfikowane za pomocą
                                obliczeń bilansu energetycznego z wykorzystaniem PHPP.
                            </p>
                            <p>
                                PHPP jest jedynym tak kompletnym narzędziem planowania efektywności
                                energetycznej dla architektów i projektantów. Zapotrzebowanie na
                                energię obliczone za pomocą PHPP zostało porównane ze zmierzonym
                                zużyciem energii dla wielu budynków i wykazało doskonałą zgodność.
                                Na uwagę zasługuje fakt, że wiarygodność wyników uzyskanych w
                                oprogramowaniu PHPP została dokładnie zweryfikowana i w efekcie
                                potwierdzona w różnych strefach klimatycznych. PHPP jest używany na
                                całym świecie i jest już dostępne w ponad 20 językach.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja6}
                    alt="certyfikacja6"
                    smallPadding
                    colorCream
                    noBorder
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Więcej informacji na temat funkcji PHPP</h3>
                            <p>
                                Zaleca się powierzyć przygotowanie dokumentacji projektowej i\lub
                                obliczeń PHPP jednemu z Certyfikowanych Projektantów \ Doradców
                                Budownictwa Pasywnego. Osoby te ukończyły specjalny kurs
                                przygotowujący do projektowania budynków pasywnych wraz z
                                wymagającym egzaminem. Zasadniczo jednak każdy, kto posiada
                                odpowiednie kwalifikacje, może przygotować obliczenia PHPP do
                                certyfikacji. Lista niezależnych ekspertów PHPP znajduje się na
                                stronie naszej akademii w kategorii 11a.
                            </p>
                            <p>
                                Jako uzupełnienie PHPP proponujemy, narzędzie do projektowania 3D
                                designPH (wymaga Sketchupa) umożliwia modelowanie projektowe i
                                intuicyjne wprowadzanie danych.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja7}
                    alt="certyfikacja7"
                    shortBorder
                    smallPadding
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Procedura certyfikacji</h3>
                            <p>
                                Realizacją procedury certyfikacji budynków w Polsce zajmuje się
                                Polski Instytutu Budownictwa Pasywnego i Energii Odnawialnejz. Za
                                pośrednictwem certyfikatora PIBP Niemiecki Instytut - PHI Darmstadt
                                nadzoruje i kontroluje proces weryfikacji obliczeń projektowych
                                niezbędnych do certyfikacji budynku zaprojektowanego zgodnie z
                                kryteriami PHI Darmstadt.
                            </p>
                        </p>
                    }
                    textEnd={
                        <p>
                            Zaleca się wczesne skontaktowanie z certyfikatorem PIBP jeszcze na
                            etapie przygotowawczym tj. projektu budowlanego ponieważ może on wykryć
                            problemy i błędy, które można jeszcze stosunkowo łatwo rozwiązać.
                            Ponadto certyfikator PIBP sprawdzi czy projekt ma jakieś szczególne
                            cechy, które mogłyby wymagać dodatkowej kontroli weryfikacji ze strony
                            PHI Darmstadt i tym samym miały wpływ na ewentualną wycenę przez PIBP
                            zlecenia.
                        </p>
                    }
                    imgSrc={certyfikacja8}
                    alt="certyfikacja8"
                    colorCream
                    noBorder
                    smallPadding
                />
                <ContainerColumn
                    textStart={
                        <p className="certification-process">
                            <h3>Proces certyfikacji składa się z następujących faz:</h3>
                            <p>
                                <strong>Weryfikacja wstępna - etap projektowania</strong>
                                <br />
                                Ocena koncepcji projektowania, izolacji i technologii budynku lub
                                wstępnej wersji obliczeń PHPP pod kątem zgodności z kryteriami
                                certyfikacji. Szczególnie w przypadku dużych projektów i gdy zespół
                                projektowy ma niewielkie doświadczenie w zakresie standardu
                                budownictwa pasywnego, taka wstępna kontrola może okazać się
                                przydatna.
                            </p>
                            <p>
                                <strong>
                                    Weryfikacja fazy projektowej - etap projektu wykonawczego
                                </strong>
                                <br />
                                Wszystkie dokumenty projektowe związane z energią, dane techniczne
                                wyrobów budowlanych oraz kompletny bilans energetyczny (PHPP)
                                powinny zostać przedłożone certyfikatorowi PIBP przed rozpoczęciem
                                budowy. Po dokładnym sprawdzeniu i uzgodnieniu z obliczeniem bilansu
                                energetycznego, jednostka certyfikująca informuje klienta o
                                niezbędnych korektach. Jeśli wszystko jest w porządku, jednostka
                                certyfikująca potwierdzi, że zamierzony standard energetyczny
                                zostanie osiągnięty wraz z wdrożeniem niniejszego planu. Po
                                pomyślnej weryfikacji dokumentacji może nastąpić rozpoczęcie prac
                                budowlanych.
                            </p>
                            <p>
                                <strong>Weryfikacja końcowa - etap zakończonej budowy</strong>
                                <br />
                                Po zakończeniu robót budowlanych w trakcie kontroli końcowej
                                aktualizowane są ewentualne zmiany w projekcie i weryfikowane są
                                dowody z wykonania (np. kontrola szczelności powietrznej,
                                dokumentacja regulacji przepływu instalacji wentylacyjnej,
                                oświadczenie kierownika budowy).
                            </p>
                            <p>
                                <strong>Kontrola wykonania robót budowlanych </strong>
                                <br />
                                Kontrola wykonania robót budowlanych na miejscu budowy nie jest
                                automatycznie częścią procesu certyfikacji. Kontrola jakości robót
                                budowlanych jest uzależniona od decyzji jednostki certyfikującej.
                                Przed wydaniem certyfikatu, certyfikator może wysłać informację o
                                zamiarze kontroli czy obiekt został wybudowany zgodnie z
                                zweryfikowaną uprzednio dokumentacją.
                            </p>
                            <p>
                                <i>
                                    Zdecydowanie zalecamy skontaktowanie się z jednostką
                                    certyfikującą na wczesnym etapie planowania, ponieważ jednostka
                                    certyfikująca może zidentyfikować wszelkie problemy w projekcie.
                                    Generalnie jednak o certyfikację można ubiegać się na każdym
                                    etapie procesu budowy.W przypadku budynków (w szczególności
                                    niemieszkalnych), które są już użytkowane w momencie
                                    certyfikacji, organ oddający do użytku obiekt powinien
                                    dostarczyć za pośrednictwem Certyfikatora PIBP, określonych
                                    przez PHI Darmstadt informacji dodatkowych, w tym informacji na
                                    temat doświadczeń użytkowników. Jeśli okaże się, że są jakieś
                                    problemy lub trwające konflikty, certyfikację należy odłożyć do
                                    czasu ich rozwiązania lub wyjaśnienia złożonego do PHI za
                                    pośrednictwem certyfikatora PIBP.
                                </i>
                            </p>
                        </p>
                    }
                    smallPadding
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>
                                Pytania dotyczące certyfikacji - nieustannie w trakcie projektowania
                                i budowy:
                            </h3>
                            <p>
                                W przypadku decyzji projektowych dotyczących bilansu energetycznego
                                może okazać się przydatnym wcześniejsze uzgodnienie z certyfikatorem
                                PIBP sposobu oceny tych decyzji na potrzeby certyfikacji. W
                                szczególności może to mieć znaczenie jeżeli autor projektu budynku,
                                który ma zostać certyfikowany ma wątpliwości. Jest to szczególnie
                                ważne w przypadku dużych projektów i mniej doświadczonych
                                projektantów. Ciągła komunikacja w trakcie realizacji projektu poza
                                samymi godzinami audytu może wymagać zaangażowania znacznych ilości
                                czasu przez certyfikatora PIBP i co za tym idzie powiększenie
                                kosztów kontroli dokumentacji i samego procesu certyfikacji przed
                                wydaniem certyfikatu.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja9}
                    alt="certyfikacja9"
                    colorCream
                    noBorder
                    smallPadding
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Usprawnienie procesu weryfikacji</h3>
                            <p>
                                Zarówno certyfikator jak i zespół projektowy podczas procesu
                                weryfikacji pracują na interaktywnej platformie, która obsługuje
                                system komentarzy, przypomnień i pól wyboru. Dzięki temu zostaje
                                zapewniona przez certyfikatora kontrola i jakość na najwyższym
                                poziomie a to usprawnia proces decyzyjny.
                            </p>
                            <p>
                                Platforma certyfikacji online stanowi podstawę całej wymiany
                                informacji między projektantem a certyfikatem podczas procesu
                                certyfikacji. Tworzy również cały jego zapis.
                            </p>
                        </p>
                    }
                    imgSrc={certyfikacja10}
                    alt="certyfikacja10"
                    smallPadding
                />
                <ContainerBlue
                    image={dolar}
                    imageAlt="dolar"
                    text={
                        <p className="center">
                            <h3>Koszt weryfikacji i certyfikacji</h3>
                            <p>
                                Każda projekt rozpatrywany jest indywidualnie. O wysokości kosztów
                                decydują w głównej mierze powierzchnia i rodzaj obiektu budowalnego.
                                W skrajnych przypadkach ilość zgłaszanych do certyfikacji budynków.
                                (Certyfikat - CEPHdesigner, CEPHconsultant, CEPHtradesperson, wydany
                                przez PIBP lub Akademię Zdrowego Budownictwa uprawnia do rabatu 5
                                lub 10%)
                            </p>
                            <h3>Czas weryfikacji</h3>
                            <p>
                                Obecnie nasi certyfikatorzy potrzebują minimum kilka tygodni na
                                sprawdzenie projektu. Należy to uwzględnić podczas planowania
                                procesu projektowego.
                            </p>
                        </p>
                    }
                    borderBottom
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Dokumentacja</h3>
                            <p>
                                Dokumenty, które należy przedłożyć certyfikatorowi PIBP, są
                                wymienione w sekcji 3.2 kryteriów. Obejmują one m. in. plany powłoki
                                i techniki budynku oraz karty techniczne produktów związanych z
                                energią. Certyfikator PIBP sprawdza, czy przedłożone dokumenty
                                zawierają informacje niezbędne do weryfikacji i czy są one zgodne z
                                zapisami PHPP.
                            </p>
                            <p>
                                Wszystkie dokumenty należy przesłać do certyfikatora PIBP za
                                pośrednictwem platformy - po otrzymaniu od niego informacji.
                                Podpisane dokumenty papierowe, takie jak raport Blower Door, można
                                przesłać jako skan.
                            </p>
                            <p>
                                Wszystkie projekty należy przesłać w formacie pliku, który może być
                                odczytany przez certyfikatora PIBP, zazwyczaj jako plik . pdf, . dwg
                                lub . dxf. Muszą one być zgodne ze skalą i zawierać wszystkie
                                wymiary. Wszystkie przestrzenie elewacji, okien itp. wpisane do PHPP
                                muszą być łatwo widoczne na planach. W razie potrzeby plany powinny
                                być uzupełnione dodatkowymi oznaczeniami (kolorowymi) i etykietami
                                lub numerami pozycji.
                            </p>
                            <a
                                href={withPrefix('kryteria.pdf')}
                                className="criteria"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <StaticImage src="../../images/certyfikacja/criteria.png" />
                                <p>Pobierz aktualne kryteria</p>
                            </a>
                        </p>
                    }
                    smallPadding
                />
                <ContainerBlue
                    image={check}
                    alt="check"
                    text={
                        <p className="center">
                            <h3>Wydanie oryginalnego certyfikatu</h3>
                            <p>
                                Jeśli wszystkie kryteria zostaną spełnione, inwestor otrzymuje:
                                certyfikat, dokumentację bilansu energetycznego oraz opcjonalnie
                                emblemat na ścianę budynku. Autentyczność certyfikatu jest
                                potwierdzona indywidualnym numerem identyfikacyjnym nadanym przez
                                PHI Darmstadt, który jest przekazywany przez certyfikatora PIBP.
                                Można go znaleźć w dolnej części każdego certyfikatu.
                            </p>
                        </p>
                    }
                    borderBottom
                />
                <ContainerColumn
                    colorCream
                    imgSrc={certyfikacja11}
                    alt="certyfikacja11"
                    smallPadding
                    noBorder
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CertQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_certification.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
