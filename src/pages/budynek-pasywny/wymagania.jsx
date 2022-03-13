import React from 'react';
import { Layout, ContainerColumn } from '../../components';
import heroPassivhaus from '../../images/heroImages/hero_passivehouse.svg';
import { heroText } from '../../constants/heroContent';

import wymagania1 from '../../images/budynek-pasywny/wymagania1.png';

import './Passivhaus.scss';

export default function Wymagania() {
    return (
        <Layout
            heroTextContent={heroText.passivhausWymagania}
            heroBackgroundImage={heroPassivhaus}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Wymagania jakościowe budownictwa pasywnego</h3>
                            Budynek mieszkalny jest budynkiem pasywnym, jeśli spełnia trzy
                            następujące wymagania:
                            <p>
                                1. Komfortowy klimat wewnętrznym jest osiągalny bez oddzielnego
                                systemu grzewczego i bez klimatyzacji: W tym celu roczne
                                zapotrzebowanie na ciepło może wynosić, zgodnie z Pakietem
                                Planowania Budownictwa Pasywnego (PHPP), max. 15 kWh / (m²a).
                            </p>
                            <p>
                                2. Kryteria komfortu muszą być spełnione w każdym pomieszczeniu
                                mieszkalnym, zimą i latem. Prowadzą do tego z reguły następujące
                                wymagania:
                            </p>
                            <p>
                                - wartości U z nieprzezroczystej powłoki budynku musi być mniejsza
                                niż 0,15 W / (m²K)
                            </p>
                            <p>
                                - wartości U okien i innych elementów przezroczystych musi być
                                mniejsza niż 0,8 W / (m²K).
                            </p>
                            <p>
                                - przezroczyste powierzchnie w orientacji Zachodniej lub Wschodniej
                                (± 50 °) i przezroczyste powierzchnie o nachyleniu mniejszym niż 75
                                ° do płaszczyzny poziomej nie może przekraczać 15% podstawowej
                                powierzchni użytkowej lub muszą mieć tymczasową ochronę przed
                                słońcem ze współczynnikiem redukcji co najmniej 75%. Dla okna od
                                strony południowej limit to tylko w 25% podstawowej powierzchni
                                użytkowej
                            </p>
                        </p>
                    }
                    imgSrc={wymagania1}
                    textEnd={
                        <p>
                            <p>
                                - temperatura powietrza nawiewanego na wylocie w pomieszczeniu nie
                                może spaść poniżej 17 °. Musi być zapewniony równomierny przepływ
                                powietrza przez wszystkie pokoje i w każdym pokoju (wydajność
                                wentylacji). Wentylacja powinna kłaść nacisk przede wszystkim na
                                jakość powietrza (DIN 1946). Ekspozycja dźwięku przez system
                                wentylacyjny musi być bardzo mała -poniej 25 dBA
                            </p>
                            <p>
                                - domy muszą mieć w każdym pomieszczeniu mieszkalnym co najmniej
                                jeden otwieralny przepust powietrza, przepływ powietrza w mieszkaniu
                                z zewnątrz musi być możliwy (darmowe chłodzenie latem)
                            </p>
                            <p>
                                3. Specyficzne zużycie energii pierwotnej do wszystkich zastosowań
                                domowych (ogrzewanie, ciepła woda i energii elektrycznej dla
                                gospodarstw domowych) razem nie może przekraczać 120 kWh / (m²a).
                                Obliczenie jest wykonywane zgodnie z PHPP.
                            </p>
                        </p>
                    }
                    alt="wymagania1"
                    shortBorder
                />
            </section>
        </Layout>
    );
}
