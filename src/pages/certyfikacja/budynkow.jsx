import React from 'react';
import {
    Layout,
    ContainerRow,
    ContainerColumn,
    ContainerBlue,
    TransparentContainer,
    FullImageContainer,
} from '../../components';
import heroCertification from '../../images/heroImages/hero_certification.svg';
import { heroText } from '../../constants/heroContent';
import budynek from '../../images/certyfikacja/budynek.svg';
import benefity from '../../images/certyfikacja/benefits.svg';
import planowanie from '../../images/certyfikacja/planning.svg';
import dolar from '../../images/certyfikacja/icons/money.svg';
import ksiazki from '../../images/certyfikacja/icons/books.svg';
import check from '../../images/certyfikacja/icons/check.svg';
import idea from '../../images/certyfikacja/icons/idea.svg';
import certyfikat from '../../images/certyfikacja/certyfikat.svg';

export default function Budynkow() {
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaBudynkow}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerRow
                    text={
                        <p>
                            Budynki pasywne utrzymują przyjemną temperaturę w pomieszczeniach przez
                            cały rok przy bardzo niskim zapotrzebowaniu na energię. Takie budynki
                            wymagają starannego projektowania, dokładnego planowania i drobiazgowego
                            wykonania. Certyfikacja budynku pasywnego przez Instytut Budownictwa
                            Pasywnego lub jego akredytowane organy certyfikowania budynków oferuje
                            zwiększoną kontrolę jakości. Z ogromnego doświadczenia tych organów
                            korzystają projektanci w całym procesie projektowania, natomiast
                            certyfikacja sama w sobie zapewnia udokumentowaną jakość budynku.
                        </p>
                    }
                    imgSrc={budynek}
                    alt="Budynek pasywny"
                />

                <ContainerColumn
                    textStart={
                        <>
                            <strong>Korzyści z certyfikacji budynku</strong>
                            <p>
                                Budownictwo pasywne to nie obowiązkowy standard, który jest
                                ustanowiony przez prawo lub przez nakazy, jest to standard, który
                                jest przestrzegany na zasadzie dobrowolności i które jest
                                zdefiniowany jasno i jednoznacznie: Instytut Budownictwa Pasywnego
                                sformułował kryteria dla budynków pasywnych do różnych zastosowań
                                budowlanych. Istnieją tak zwane "kryteria funkcjonalne", to znaczy
                                zamiast indywidualnie określonych szczegółów konstrukcyjnych lub
                                technicznych, wymaga się, że ogólne projektowanie wykonuje się z
                                profesjonalnie obliczoną równowagą energetyczną, opracowaniem
                                szczegółów i dokumentacją komponentów. Zapewnia to, że planowany
                                budynek rzeczywiście działa tak jak się tego oczekuje.
                            </p>
                        </>
                    }
                    textEnd={
                        <>
                            <strong>Staranne planowanie</strong>
                            <p>
                                Certyfikacja ma zapewnić dobrą jakość pracy. Centrum zainteresowania
                                tutaj jest planowanie, ponieważ tylko praktycznie zorientowane
                                planowanie może być przekształcone w dobrze funkcjonujący budynek.
                                Szczelność, brak mostków termicznych, wysokiej jakości okna i ich
                                instalacja, system wentylacyjny oraz inne usługi budowlane -
                                wszystko to musi być planowane i koordynowane ze sobą w
                                ukierunkowanym podejścia (wśród ekspertów jest to znane jako
                                integralne planowanie).
                            </p>
                        </>
                    }
                    imgSrc={benefity}
                    alt="Planowanie i korzyści z planowania"
                    shortBorder
                />

                <FullImageContainer image={planowanie} alt="narzędzia do planowania" />

                <ContainerBlue
                    text={
                        <>
                            <strong>
                                Pakiet planowania budynku pasywnego - narzędzie planowania
                            </strong>
                            <p>
                                Głównym narzędziem do tego celu jest Pakiet Planowania Budynku
                                Pasywnego (PHPP). Doświadczenie zdobyte w ciągu dziesięcioleci
                                udanych projektów budynków pasywnych zostało zebrane w PHPP. Każdy,
                                kto korzysta z PHPP podczas planowania, kierowany jest do
                                skoordynowanych i skutecznych rozwiązań, a także korzysta z okazji
                                do opłacalnej budowy. Odpowiedzialne korzystanie z PHPP wymaga
                                również dokumentacji wybranych rozwiązań i ustalenia odpowiednich
                                parametrów (np. współczynnika przenikania ciepła przez szyby).
                                Planista może wziąć te wartości z niezależnych testów. Jednakże,
                                jeżeli elementy budowlane zostały certyfikowane jako
                                "Certyfikowanych komponentów do budownictwa pasywnego”, to wartości
                                podane w certyfikacie mogą być po prostu przeniesione do PHPP.
                            </p>
                        </>
                    }
                    border
                />

                <TransparentContainer
                    text={
                        <>
                            <strong>
                                Korzyści z certyfikacji zaplanowanego budynku pasywnego dla
                                projektanta i właściciela budynku
                            </strong>
                            <ul>
                                <li>
                                    <img src={ksiazki} alt="ksiazki" />
                                    Projektant może polegać na wiedzy zebranej wraz z wieloletnim
                                    doświadczeniem wykwalifikowanej osoby certyfikującej, ułatwiając
                                    tym samym proces planowania.
                                </li>
                                <li>
                                    <img src={idea} alt="idea" />W procesie certyfikacji, projektant
                                    otrzymuje cenne wskazówki, w jaki sposób można poprawić jakość i
                                    jak można uprościć rozwiązania i realizować je w lepszy i
                                    bardziej opłacalny sposób.
                                </li>
                                <li>
                                    <img src={check} alt="check" />Z certyfikatem wydanym przez
                                    Instytut Budownictwa pasywnego właściciel budynku może być
                                    pewien, że jego / jej budynek w końcu stał się budynkiem
                                    pasywnym, a inwestycja w wyższą jakość komponentów zwraca się.
                                </li>
                                <li>
                                    <img src={dolar} alt="dolar" />
                                    Często zdarza się, że wsparcie udzielane przez doświadczone
                                    jednostki certyfikujące, sprawiają, że budynek pasywny jest
                                    bardziej ekonomiczny.
                                </li>
                            </ul>
                        </>
                    }
                />

                <ContainerColumn
                    textStart={
                        <>
                            <strong>Certyfikat</strong>
                            <p>
                                Po zakończeniu procesu zapewnienia jakości, który jest zwykle
                                przeprowadzony po badaniu ciśnienia, klient otrzymuje certyfikat
                                oraz książeczkę certyfikacji zawierającą stronice PHPP, które są
                                istotne dla certyfikatu. Jest to również pełna dokumentacja dla
                                budynku z nawiązaniem do jego właściwości termicznych. Tablica
                                ścienna, która może być przymocowana do budynku, jest również
                                przekazanym klientowi.
                            </p>
                        </>
                    }
                    imgSrc={certyfikat}
                    alt="Planowanie i korzyści z planowania"
                />

                <TransparentContainer
                    text={
                        <>
                            <strong>Certyfikacja budynków mieszkalnych</strong>
                            <p>
                                Każdy, kto chce się upewnić, że planowana budowa rzeczywiście ma się
                                okazać budynkiem pasywnym, może mieć budynek certyfikowany.
                                Właściciele budynków i architekci mogą ubiegać się o certyfikację
                                przez Instytut Budownictwa Pasywnego lub przez inną akredytowaną
                                jednostkę certyfikującą. Oprócz innych rzeczy rozpatrywane są
                                obliczenia, na których oparta jest konstrukcja budynku i
                                dokumentacja planowania powłoki budynku oraz zakresu jego usług.
                                Jeżeli dom jest wyróżniony certyfikatem "Certyfikowany budynek
                                pasywny", właściciel może być pewien, że będzie miał najwyższy
                                poziom komfortu życia przy bardzo niskim zużyciu energii. Koncepcja
                                "budownictwa pasywnego" celowo nie jest zabezpieczona. Każda osoba,
                                która jest upoważniona do przedstawienia dokumentów budowlanych,
                                jest w stanie uzyskać dostęp do informacji i ma on/ona możliwość
                                swobodnie zbudować budynek pasywny na jego / jej własną
                                odpowiedzialność. Jednak Instytut Budownictwa Pasywnego przypomina,
                                że doświadczony projektant budownictwa pasywnego lub biegły powinien
                                konsultować projekt, w szczególności w przypadku pierwszego projektu
                                budynku pasywnego.
                            </p>
                            <strong>Certyfikacja budynków niemieszkalnych</strong>
                            <p>
                                Metoda budowy zabudowań pasywnych jest rozsądnym standardem nie
                                tylko dla budynków mieszkalnych; budynki biurowe, hostele, fabryki,
                                budynki administracyjne, hale sportowe, przedszkola, szkoły, itp
                                mogą być również zbudowane i certyfikat jako budynki pasywne.
                                Wartości obliczone ("na żądanie") dla ogrzewania i energii
                                pierwotnej są później podane w certyfikacie. Są one oparte na
                                ogrzewanej powierzchni lub powierzchni użytkowej. Późniejsze
                                użytkowanie rzeczywiście zależy od jakości strukturalnej powłoki
                                zewnętrznej (oprócz zachowań użytkownika i warunków pogodowych) i to
                                jest dokładnie to, czym jest certyfikat wraz z charakterystyką usług
                                budowlanych.
                            </p>
                            <strong>
                                EnerPHit - certyfikat modernizacji z komponentami do budownictwa
                                pasywnego
                            </strong>
                            <p>
                                Zastosowanie komponentów do budownictwa pasywnego w renowacji
                                istniejących budynków prowadzi do rozległych ulepszeń w odniesieniu
                                do komfortu cieplnego, efektywności ekonomicznej, braku uszkodzeń
                                strukturalnych i ochrony klimatu. Zmniejszenie zapotrzebowania na
                                energię cieplną nawet do 90% zostało osiągnięte w wielu projektach.
                                Osiągnięcie standardu budownictwa pasywnego w renowacji istniejących
                                budynków nie zawsze jest realnym celem, jednym z powodów są ściany
                                piwnic z pozostającymi mostkami termicznymi, nawet po remoncie. Dla
                                takich budynków Instytut Budownictwa Pasywnego opracował EnerPHit
                                dla certyfikowanej modernizacji energetycznej z komponentami do
                                budownictwa pasywnego. To wymaga albo maksymalnego zapotrzebowania
                                dla ogrzewania 25 kWh / (m²a) lub alternatywnie konsekwentne
                                stosowanie komponentów do budownictwa pasywnego, zgodnie z
                                wymaganiami certyfikacji komponentów PHI. Zapotrzebowanie na ciepło
                                obliczone przez PHPP i jakość ochrony termicznej indywidualnych
                                komponentów są wskazane w certyfikacie.
                            </p>
                        </>
                    }
                />
            </section>
        </Layout>
    );
}
