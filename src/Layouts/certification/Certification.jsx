import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { certificationNavItems } from '../../constants/subNavItems';

import './Certification.scss';

export function Certification() {
    return (
        <>
            <SubpageNavbar navElements={certificationNavItems} />
            <div className="layout-content">
                <Switch>
                    <Route exact path="/certyfikacja">
                        <h2>Certyfikacja</h2>
                        <p>
                            Certyfikacja budynków pasywnych zapewnia, że wysokie wymagania
                            jakościowe standardów budownictwa pasywnego są spełnione. Ale nie tylko
                            budynki mogą otrzymać certyfikat od Instytutu Budownictwa Pasywnego, ale
                            także produkty i rozwiązania szczegółowe, tak samo jak projektanci,
                            inżynierowie, rzemieślnicy i konsultanci/doradcy.
                            <br />
                            Certyfikowany Projektant \ Doradca Budownictwa Pasywnego i Mistrz
                            Wykonawca Budownictwa Pasywnego nabywa niezbędną wiedzę na temat
                            budownictwa pasywnego poprzez praktyczne doświadczenia przy projekcie
                            pasywnym lub EnerPHit lub przez zdanie egzaminu. Korzystanie z
                            komponentów, które są certyfikowane przez Instytut Budownictwa
                            Pasywnego, ułatwia planowanie budynków i znacznie przyczynia się do
                            zapewnienia prawidłowego funkcjonowania powstających budynków pasywnych.
                            Certyfikaty "Certyfikowany Budynek Pasywny ", "EnerPHit - Certyfikowana
                            modernizacja" i "Dom energooszczędny" przyznawane są dopiero po
                            szczegółowym zbadaniu przez Instytut Budownictwa Pasywnego lub inny
                            podmiot akredytowany. Jest to znak jakości dla całego budynku.
                            <br />
                            <ul>
                                <li>Komponenty</li>
                                <li>Budynki</li>
                                <li>Certyfikowany Projektant \ Doradca Budownictwa Pasywnego</li>
                                <li>Mistrz Wykonawca Budownictwa Pasywnego</li>
                            </ul>
                        </p>
                    </Route>
                    <Route exact path="/certyfikacja/budynkow">
                        <div>
                            <p>
                                Budynki pasywne utrzymują przyjemną temperaturę w pomieszczeniach
                                przez cały rok przy bardzo niskim zapotrzebowaniu na energię. Takie
                                budynki wymagają starannego projektowania, dokładnego planowania i
                                drobiazgowego wykonania. Certyfikacja budynku pasywnego przez
                                Instytut Budownictwa Pasywnego lub jego akredytowane organy
                                certyfikowania budynków oferuje zwiększoną kontrolę jakości. Z
                                ogromnego doświadczenia tych organów korzystają projektanci w całym
                                procesie projektowania, natomiast certyfikacja sama w sobie zapewnia
                                udokumentowaną jakość budynku.
                            </p>
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
                            <strong>Staranne planowanie</strong>
                            <p>
                                Certyfikacja ma zapewnić dobrą jakość pracy. Centrum zainteresowania
                                tutaj jest planowanie, ponieważ tylko praktycznie zorientowane
                                planowanie może być przekształcone w dobrze funkcjonujący budynek.
                                Szczelność, brak mostków termicznych, wysokiej jakości okna i ich
                                instalacja, system wentylacyjny oraz inne usługi budowlane –
                                wszystko to musi być planowane i koordynowane ze sobą w
                                ukierunkowanym podejścia (wśród ekspertów jest to znane jako
                                integralne planowanie).
                            </p>
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
                            <strong>
                                Korzyści z certyfikacji zaplanowanego budynku pasywnego dla
                                projektanta i właściciela budynku
                            </strong>
                            <ul>
                                <li>
                                    Projektant może polegać na wiedzy zebranej wraz z wieloletnim
                                    doświadczeniem wykwalifikowanej osoby certyfikującej, ułatwiając
                                    tym samym proces planowania.
                                </li>
                                <li>
                                    W procesie certyfikacji, projektant otrzymuje cenne wskazówki, w
                                    jaki sposób można poprawić jakość i jak można uprościć
                                    rozwiązania i realizować je w lepszy i bardziej opłacalny
                                    sposób.
                                </li>
                                <li>
                                    Z certyfikatem wydanym przez Instytut Budownictwa pasywnego
                                    właściciel budynku może być pewien, że jego / jej budynek w
                                    końcu stał się budynkiem pasywnym, a inwestycja w wyższą jakość
                                    komponentów zwraca się.
                                </li>
                                <li>
                                    Często zdarza się, że wsparcie udzielane przez doświadczone
                                    jednostki certyfikujące, sprawiają, że budynek pasywny jest
                                    bardziej ekonomiczny.
                                </li>
                            </ul>
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
                        </div>
                    </Route>
                    <Route exact path="/certyfikacja/komponentów">
                        <div>
                            <h2>Korzyści Certyfikacji Komponentów do Budownictwa Pasywnego</h2>
                            <p>
                                Standard budownictwa pasywnego charakteryzuje się bardzo wysoką
                                oszczędnością energii w porównaniu do tradycyjnych nowych budynków.
                                Oszczędności uzyskuje się przez wysoko wydajnościowe budynki i
                                wyposażenie budowlane. Oprócz starannego planowania zakłada się
                                szczególne zastosowanie energooszczędnych komponentów. Z reguły te
                                komponenty są od około dwóch do czterech razy tak skuteczniejsze niż
                                odpowiadające im powszechnie dostępne produkty. Ten wysokiej
                                efektywności energetycznej jest kluczowe dla osiągnięcia standardu
                                domu pasywnego. Ta wysoka efektywność energetyczna jest kluczowa dla
                                osiągnięcia standardu budownictwa pasywnego. Jednak projektantowi
                                często trudno ocenić elementy budowlane w odniesieniu do ich
                                efektywności energetycznej, ich trwałości i zastosowanej
                                charakterystyki energetycznej: dostępne charakterystyki
                                standaryzacji są często nierealne lub niewystarczająco precyzyjne.
                                Niezawodne projektowanie z samymi instrukcjami producenta jest
                                często niemożliwe. Instytut Budownictwa Pasywnego jako niezależny
                                organ sprawdza i certyfikuje produkty pod względem ich przydatności
                                do zastosowania w budynkach pasywnych. Produkty posiadające
                                certyfikat "Odpowiedni komponent do budownictwa pasywnego" są
                                testowane według pojedynczych kryteriów, w odniesieniu do ich cech
                                porównywalnych i doskonałej jakości energii. Ich stosowanie ułatwia
                                projektantowi znacznie jego zadanie i znacząco przyczynia się do
                                prawidłowego funkcjonowania budynku pasywnego.
                            </p>
                            <strong>Informacje o certyfikacji</strong>
                            <p>
                                okiennych, wysoce wydajnych urządzeń wentylacyjnych, szczegółowych
                                połączeń wolnych od mostków termicznych, przeszkleń, które pozwalają
                                na docieranie słońca, urządzenia kompaktowe tip. Certyfikowane
                                produkty budownictwa pasywnego pozwalają użytkownikowi jednoznacznie
                                określić i porównać odpowiednie cechy produktów. Odpowiednie
                                doświadczenie przy poprzednich projektach zabudowań pasywnych
                                pozwala Instytutowi Budownictwa Pasywnego sformułować praktyczne,
                                łatwe do sprawdzenia i jasno sprecyzowane kryteria, które powinny
                                być spełnione przez produkty do budownictwa pasywnego. Kryteria te
                                odnoszą się wyłącznie do dwóch obszarów:
                                <ul>
                                    <li>zdrowie i komfort mieszkalny ("kryteria komfortu")</li>
                                    <li>energetyczny w praktyce ("kryteria energetyczne")</li>
                                </ul>
                                Instytut Budownictwa Pasywnego ustanowił sobie odpowiednio za cel,
                                obiektywnie ustalić poziom wymagań fizycznych lub fizjologicznych
                                (np. max. różnica temperatur promieniowanie 5 K między
                                pomieszczeniami, pochodząca z normy ISO 7730). Tam, gdzie samo to
                                nie wystarcza dla sformułowania, zostały wprowadzone kategorie
                                efektywności (na przykład w oknach budynków pasywnych). Jeśli jest
                                to możliwe formułuje się kryteria niezależne od klimatu. Jednak
                                zazwyczaj jest to mniej przejrzyste dla użytkownika - w związku z
                                tym stosowane są również zdefiniowane kryteria dla określonych
                                warunkach klimatycznych. Wszystkie kryteria muszą być określone w
                                mierzalnych wielkościach i zweryfikowane przez pomiary ustalonymi
                                metodami. W certyfikacie są podane informacje dotyczące bilansu
                                energetycznego i ewentualne obliczenia wskazanych dech każdego
                                produktu. Mogą one być wprowadzone bezpośrednio do PHPP. Parametry
                                są określone tak, że ich wartości są w rzeczywistości
                                charakterystyczne dla zachowań komponentu w praktycznie zbudowanym
                                budynku pasywnym (np. w odniesieniu do powłoki budynku na granicy
                                bilansowej systemów wentylacyjnych). Parametry występujące w każdym
                                przypadku odnoszą się wyłącznie do odpowiedniego produktu. Ale mogą
                                być też określone ewentualne ograniczenia odnośnie mocowania w całej
                                nieruchomości, np. montaż okna. Ograniczenia są zawsze wybierane w
                                odniesieniu do realistycznego praktycznego zastosowania, a nie w
                                odniesieniu do sztucznych warunków laboratoryjnych.
                            </p>
                        </div>
                    </Route>
                    <Route exact path="/certyfikacja/lista-budynkow">
                        <div>lista budynków</div>
                    </Route>
                    <Route exact path="/certyfikacja/projektanci">
                        <div>
                            <h2>Lista certyfikowanych projektantów - CEPHD</h2>
                            <strong>
                                Certyfikowany Projektant \ Doradca Budownictwa Pasywnego
                            </strong>
                            <p>
                                <a href="https://service.passivehouse.com/de/profis/planerkarte">
                                    Zobacz mapę wszystkich certyfikowanych projektantów.
                                </a>
                                Aby nowe budynki dzisiaj mogły być tak zaprojektowane, żeby
                                spożywały tylko ułamekenergii, tak jak to dotychczas zwykle było –
                                nie muszą już być sprawdzane. Tymczasem ilość budowanych w Europie
                                budynków pasywnych oscyluje już wokół pięciocyfrowych liczb. Domy
                                pasywne to budynki, których zużycie energii grzewczej tylko w
                                przybliżeniu wynosi jedną dziesiątą w porównaniu do średnich
                                budynków. Wymagania jakościowe standardów budownictwa pasywnego są
                                od dawna ustalone. Wszelkie takie wymagania są publikowane i
                                dostępne w Internecie. Ponadto istnieją projektowe narzędzia
                                pomocnicze takie jak Pakiet Planowania Budynku Pasywnego (PHPP) i
                                informacje, takie jak Passipedia. Wszystko to nie zastępuje
                                architekta - ale sprawia, że jego życie jest łatwiejsze. Niezbędną
                                wiedzę mogą uzyskać planiści i projektanci podczas szkoleń i
                                seminariów. Istnieje wiele różnych ofert dostępnych kursów. Inna
                                forma szkolenia wykracza poza praktyczne zastosowanie. Architekt,
                                który zaprojektował i zbudował certyfikowany dom pasywny, ma bez
                                wątpienia niezbędne know-how. Certyfikat pokazuje klientowi, że jego
                                planista lub doradca uzyskał wiedzę i doświadczenie w zakresie
                                planowania i doradztwa przy projektach budynków pasywnych.
                                Certyfikowanego Projektanta Budownictwa Pasywnego nie należy mylić z
                                akredytowanymi organami certyfikującymi budynki poprzez "Certyfikat
                                budynku pasywnego". Tutaj znajduje się więcej informacji na temat
                                Certyfikowanego Projektanta/Doradcy Budownictwa Pasywnego. Tutaj
                                znajdują się certyfikowani Projektanci/Doradcy Budownictwa
                                Pasywnego. Wyszukaj certyfikowanych projektantów -
                                http://passivhausplaner.eu/mitgliederdatenbank.php
                            </p>
                        </div>
                    </Route>
                    <Route exact path="/certyfikacja/wykonawcy">
                        <div>
                            <h2>Lista certyfikowanych wykonawców - CEPHT</h2>
                            <strong>Certyfikowany Mistrz Wykonawca Budownictwa Pasywnego</strong>
                            <p>
                                Budynek pasywny to więcej niż suma jego części. Aby uniknąć błędów,
                                konieczne jest poznanie zależności i relacji wszystkich komponentów
                                potrzebnych do budowy budynku pasywnego. Zmiany i odstępstwa od
                                ustalonego projektu powinny być energetycznie ocenione. Mogą one
                                mieć istotny wpływ na funkcjonowanie budynku. W ramach dalszego
                                dokształcania Mistrzów Wykonawców zostanie przekazana fundamentalna
                                wiedza fachowa na temat budowy budynków pasywnych. Celem szkolenia
                                na „Mistrza Wykonawcę Budownictwa Pasywnego” jest przekazanie
                                uczestnikom zaangażowanym w budowę w rozsądnym czasie ogólnego
                                wrażenia koncepcji budownictwa pasywnego. Po pomyślnym zdaniu
                                egzaminu uczestnik otrzymuje certyfikat "Certyfikowany Mistrz
                                Wykonawca Budownictwa Pasywnego" i jest wpisany na listę
                                "Certyfikowanych Mistrzów Wykonawców Budownictwa Pasywnego ", co
                                zapewnia, że wszyscy zaangażowani w budowę w dowolnym czasie mają
                                dostęp do informacji o kwalifikowanych rzemieślnikach.
                            </p>
                            <strong>
                                Budownictwo Pasywne to standard budowlany z przyszłością
                            </strong>
                            <p>
                                Budownictwo pasywne sprawdza się od wielu lat - w nowym
                                budownictwie, jak również w modernizacji. Począwszy od roku 2021
                                wszystkie nowe budynki muszą być zgodne ze specyfikacją "Budynek o
                                niemal zerowym zużyciu energii" (NZEB), zgodnie z dyrektywą UE w
                                sprawie budownictwa (EPBD). Budownictwo pasywne jest podstawą do
                                tego. Zakłady rzemieślnicze, które kształcą się na temat budownictwa
                                pasywnego, mają możliwość otwarcia lukratywnego biznesu. Wyszukaj
                                certyfikowanych wykonawców -
                                http://www.passivehouse-trades.org/mitgliederdatenbank.php
                            </p>
                        </div>
                    </Route>
                    <Route exact path="/certyfikacja/weryfikatorzy">
                        <div>
                            <h2>weryfikatorzy</h2>
                            <p>
                                Następujący eksperci zostali międzynarodowo akredytowani przez
                                Instytut Budownictwa Pasywnego (PHI) do certyfikowania w imieniu PHI
                                budynków na całym świecie zgodnie z normami budownictwa pasywnego i
                                modernizacji EnerPHit. arch.mgr.inz.Lukasz Smol arch.mgr.inż Tomasz
                                Pyszczek dr. Andrzej Górka arch.mgr.inż Marcin Stelmach arch.mgr.inż
                                Cezary Sankowski
                            </p>
                        </div>
                    </Route>
                </Switch>

                <Button textContent={'Certyfikacja button'} />
            </div>
        </>
    );
}
