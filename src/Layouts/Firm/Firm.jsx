import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Announcements, Button, SubpageNavbar } from '../../components';
import { firmNavItems } from '../../constants/subNavItems';

import './Firm.scss';

export function Firm() {
    return (
        <>
            <SubpageNavbar navElements={firmNavItems} />
            <section className="layout-content">
                <Announcements />

                <Switch>
                    <Route exact path="/firma">
                        <h2>Firma</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
                            nihil est repellat consequatur quam enim! Error asperiores doloribus
                            voluptatum eos consequuntur id animi nostrum. Vel consectetur explicabo
                            officia atque natus!
                        </p>
                    </Route>
                    <Route exact path="/firma/aktualnosci">
                        <h2>moved to '/firma/ ??</h2>
                    </Route>
                    <Route exact path="/firma/onas">
                        <h3>onas</h3>
                        <p>
                            Od 2004 roku jesteśmy niezależną polską instytucją, aktualnie działającą
                            na zasadach non-profit. Naszym celem jest upowszechnianie wiedzy o
                            budownictwie pasywnym, zero energetycznym, plus energetycznym oraz o
                            kompleksowej termomodernizacji z wykorzystaniem technologii i
                            komponentów pasywnych. Ponadto transferujemy wiedzę na temat energii
                            odnawialnej, która z powodzeniem pokrywa potrzeby budynków energetycznie
                            pasywnych.
                        </p>
                        <br />
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
                        <p>
                            Naszym celem jest możliwie szeroka popularyzacja wiedzy na temat
                            budownictwa pasywnego. Pragniemy stale poszerzać krąg sympatyków idei
                            budownictwa pasywnego. Jest to właściwa droga do podniesienia, jakości
                            życia oraz ochrony środowiska naturalnego, a przede wszystkim wyraźna
                            pomoc w uzyskaniu niezależności energetycznej naszego kraju.
                        </p>
                        <p>
                            Będziemy współpracować ze wszystkimi, którzy tak jak my pragną
                            ograniczenia bezsensownej konsumpcji energetycznej a przy okazji celują
                            w postęp z wykorzystaniem innowacyjnych rozwiązań w zakresie
                            zrównoważonego energetycznie rozwoju.
                        </p>
                        <ul>
                            <li>organizacja wykładów, konferencji i seminariów;</li>
                            <li>
                                organizacja <strong>szkoleń i kursów</strong> dla uczestników
                                procesu budowlanego;
                            </li>
                            <li>projektowanie budynków pasywnych;</li>
                            <li>weryfikacja projektów budowlanych;</li>
                            <li>
                                <strong>certyfikacja budynków pasywnych</strong>;
                            </li>
                            <li>
                                <strong>dystrybucja narzędzi</strong> (oprogramowanie PHPP)
                                wspomagających projektowanie nowych budynków oraz termomodernizację
                                budynków istniejących;
                            </li>
                            <li>
                                <strong>dystrybucja książek</strong> o budownictwie pasywnym oraz z
                                zakresu ciepłownictwa i klimatyzacji;
                            </li>
                            <li>
                                zwiedzanie budynków pasywnych z wykładem i komentarzem na terenie
                                Polski i Niemiec;
                            </li>
                            <li>
                                udzielanie patronatów merytorycznych oraz honorowych na potrzeby
                                popularyzacji wydarzeń tematycznych;
                            </li>
                            <li>
                                wypożyczanie wystawy{' '}
                                <strong>„Budownictwo pasywne od A do Z”</strong>;
                            </li>
                            <li>współpraca z portalami branżowymi i prasą;</li>
                            <li>promocja firm popularyzujących budownictwo pasywne;</li>
                        </ul>
                        <p>
                            Naszym głównym celem jest popularyzacja i transfer wiedzy z zakresu
                            budownictwa pasywnego oraz szerokie promowanie tego standardu.
                            Organizujemy konferencje, fora i spotkania dające możliwość wymiany
                            doświadczeń, pogłębienia wiedzy oraz nawiązania nowych kontaktów.
                            Przygotowujemy i opracowujemy materiały szkoleniowo - dydaktyczne (dla
                            doskonalenia zawodowego) i informacyjne dla projektantów budynków
                            pasywnych oraz wykonawców takich budynków. Chętnie wspieramy ambitne
                            wydarzenia takie jak międzynarodowe czy lokalne targi budowlane, gdyż
                            poprawa efektywności energetycznej naszego kraju jest w największej
                            mierze uzależniona od poziomu świadomości społeczeństwa polskiego.
                        </p>
                    </Route>
                    <Route exact path="/firma/partnerzy">
                        <h3>Partnerzy</h3>
                        <p>
                            Od stycznia 2015 roku Instytut Budownictwa Pasywnego uczestniczy w
                            unijnym projekcie Built2Spec, którego celem jest wypełnienie luki między
                            planowaniem i rzeczywistym wykonaniem budynku. Tablet lub smart fon w
                            Tyn przypadku odgrywa kluczową rolę. Instytut Budownictwa Pasywnego
                            udostępnia swoją ekspertyzę rozwoju platformy wysoko energooszczędnego
                            budownictwa i zapewniania jakości i pracuje nad interfejsami między
                            platformą bazującą na BIM a panelem planowania PHPP i narzędzi
                            projektowych PH. Built2Spec jest finansowany ze środków programu
                            ramowego UE na rzecz badań naukowych i innowacji "Horyzont 2020".
                        </p>
                        <p>
                            Instytut Budownictwa Pasywnego (PHI) uczestniczy w Projekcie Sinfonia,
                            finansowanym przez UE, w doradztwie i certyfikacji projektów
                            modernizacyjnych w miastach demonstracyjnych - Innsbrucku i Bolzano. W
                            rozwój i wdrożenie koncepcji wykazującej oszczędności w około 500
                            mieszkaniach jest również zaangażowany PHI. Ponadto chodzi o zagadnienia
                            efektywności energetycznej i oszczędności oceny potencjałów energii
                            elektrycznej na szczeblu okręgowym. Opracowane w projekcie wyniki i
                            zastosowanie praktyczne zostaną wspólne z zaangażowanymi „pionierskimi”
                            miastami Pafos (Cypr), La Rochelle (Francja), Rosenheim (Niemcy),
                            Sewilla (Hiszpania) i Boras (Szwecja) włączone w konkretne, zrównoważone
                            plany rozwoju energetycznego odpowiednich miejskich koncepcji.
                        </p>
                        <p>
                            Ponadto PHI koordynuje projekt EuroPHit finansowany przez IEE. Celem
                            jest ustanowienie kryteriów i możliwości certyfikacji dla wysoko
                            wydajnościowych modernizacji poprzez normy EnerPHit, jeśli mają być
                            wykonywane stopniowo w dłuższym okresie czasu. Potwierdzają to nowe
                            narzędzia programowe, projekty pilotażowe takie jak szkolenia
                            projektantów i mistrzów wykonawców. Zainteresowane strony (w tym władze
                            lokalne, instytucje finansowe lub producenci) będą przy tym jeszcze
                            lepsze. Jednocześnie specjalnie promowane jest zastosowanie komponentów
                            do budownictwa pasywnego na remonty
                        </p>
                        <p>
                            Instytut Budownictwa Psywnego (PHI) odegrał znaczącą rolę w bieżących
                            projektach Unii Europejskiej w obszarze programu "Inteligentna Energia
                            dla Europy" (IEE) i w innych projektach: "Promocja Europejskiego
                            Budownictwa Pasywnego" (PEP) i "Passive On". Koordynację przy projekcie
                            Pass Reg (Regiony Budownictwa Pasywnego z odnawialną energią)
                            finansowanym przez IEE przejął PHI i jest on aktywnym partnerem w
                            projekcie FP7 3encult. Ponadto PHI jest partnerem przy TASKS 28
                            („Zrównoważony Odbudowa Solar”) i 37 ("Zaawansowana renowacja budynków")
                            IEA (Międzynarodowej Agencji Energii).
                        </p>
                        <p>
                            W zakończonym już projekcie CEPHEUS (Ekonomicznie wydajne domy pasywne
                            jako europejskie standardy) po stronie PHI leżało naukowe kierownictwo.
                            Projekt był finansowany przez UE w ramach programu Thermie i przez
                            Hessen. W ramach projektu CEPHEUS zostało wybudowane i wykorzystane w
                            Europie ponad 220 mieszkań w formie budownictwa pasywnego.
                        </p>
                        <p>
                            PHI organizuje corocznie od 1996 roku Międzynarodową Konferencję
                            Budownictwa Pasywnego. Impreza ta jest uznanym światowym centrum dla
                            energooszczędnego budownictwa i renowacji i jako takie ważnym dorocznym
                            miejscem spotkań ludzi nauki, architektury, technologii i rozwoju
                            produktów.
                        </p>
                        <p>
                            PHI był również odpowiedzialny za fizyczne doradztwo budowlane i
                            wsparcie naukowe wielu projektów pilotażowych, m.in. w pierwszym
                            pasywnym biurowcu (Cölbe w pobliżu Marburgu), pierwszy fabryka pasywna
                            (Bensheim w pobliżu Darmstadt), pierwsze pasywne szkoły (Frankfurt nad
                            Menem, Aufkirchen koło Monachium), pierwsze pasywne pływalnie kryte
                            (Bamberg i Lünen) oraz pierwszy remont domu pasywnego (Norymberga,
                            Frankfurt, Ludwigshafen). PHI podjął się również naukowej oceny tych
                            projektów, w związku z tym odgrywał w tym istotną rolę.
                        </p>
                        <p>
                            Za koncepcję rozwoju Budownictwa Pasywnego Wolfgang Feist został w 2001
                            roku uhonorowany Nagrodą Środowiska przez Niemiecką Federalną Fundację
                            Ekologiczną. W 2003 roku miastu Göteborg razem ze szwedzkim architektem
                            Hansem Eek została przyznana Międzynarodowa Nagroda Środowiska. Przez to
                            została doceniona ich wspólna pionierska praca, która przyczynia się do
                            znacznej redukcji zużycia paliw kopalnych, a tym samym do zmniejszenia
                            emisji CO2.
                        </p>
                    </Route>
                    <Route exact path="/firma/kontakt">
                        <h3>Kontact</h3>
                        <p>
                            Polski Instytut Budownictwa Pasywnego i Energii Odnawialnej imienia
                            Güntera Schlagowskiego NON-PROFIT Sp. z o.o. ul. Homera 55 80-299 GDAŃSK
                            (Osowa)
                        </p>
                        <ul>
                            <li>
                                Numer KRS: 0000219538 VII Wydział Gospodarczy KRS, Gdańsk-Północ
                            </li>
                            <li>Kapitał zakładowy 360.000 PLN</li>
                            <li>REGON 193102200</li>
                            <li>NIP PL 2040000444</li>
                        </ul>

                        <p>
                            Sekretariat:
                            <br />
                            Tel.: +48 58 524 12 00 Fax: +48 / 58 522 98 50 E-mail: pibp@pibp.pl
                            http://www.pibp.pl/
                            <br />
                            Księgowość:
                            <br />
                            Tel.: +48 58 524 12 06 E-mail: h.fiuczek@pibp.pl Konto PL: Nr konta: 05
                            1140 1065 0000 3335 8600 1001
                            <br />
                            Konto EU: Nr konta: 05 1140 1065 0000 3335 8600 1002
                        </p>
                    </Route>
                </Switch>
                <Button textContent={'Text'} />
            </section>
        </>
    );
}
