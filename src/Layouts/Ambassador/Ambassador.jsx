import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { ambassadorNavItems } from '../../constants/subNavItems';

import './Ambassador.scss';

export function Ambassador() {
    return (
        <div className="layout-content">
            <SubpageNavbar navElements={ambassadorNavItems} />
            <Switch>
                <Route exact path="/ambasador">
                    <h2>Ambasador</h2>
                    <p>
                        Ambasadorzy Budownictwa Pasywnego to grupa firm z różnych sektorów branży
                        budowlanej, które wprowadzają innowacje na Polski rynek w postaci
                        komponentów i systemów budowlanych zalecanych do stosowania w budynkach
                        pasywnych oraz świadczą usługi projektowania i budowy takich obiektów w
                        oparciu o kryteria budownictwa pasywnego według najwyższych standardów
                        opracowanych przez Passivhaus Institut Darmstadt.
                    </p>
                </Route>
                <Route exact path="/ambasador/partnerzy">
                    <p>
                        Poniżej w formie tabeli podzielonej na kilka kategorii prezentowane są
                        właśnie firmy popierające budownictwo pasywne przez rozwój produkcji,
                        wprowadzanie nowych energooszczędnych komponentów i materiałów budowlanych,
                        badania naukowe, finansowanie przedsięwzięć mających na celu ograniczenie
                        zużycia energii, a także jej racjonalne pozyskiwanie i wykorzystanie oraz
                        inne działalności. Otrzymały one tytuł Ambasadora Budownictwa Pasywnego, co
                        zobowiązuje je do zachowania najwyższych standardów oraz do popularyzacji i
                        promocji najbardziej efektywnych i ekonomicznych rozwiązań w budownictwie.
                        Firmy te mają w swojej ofercie produkty, które z powodzeniem można
                        wykorzystać podczas realizacji budynku pasywnego. Na szczególną uwagę
                        zasługują te wyroby, które posiadają certyfikat wydany przez Passivhaus
                        Institut Darmstadt potwierdzający ich wysoką jakość. 
						<br />
						Koordynator grupy
                        Ambasador Budownictwa Pasywnego ze strony PIBPiEO: Łukasz Krzysztoń,
                        l.krzyszton@pibp.pl, tel. +48 (058) 5240-12-01 
						<br />
						*Wymagania wysokiej jakości
                        dla standardu budownictwa pasywnego istnieją wiele lat. Zawsze aktualne
                        kryteria budownictwa pasywnego są opublikowane i swobodnie dostepne w
                        internecie. Te wymagania, które powinny spełniać budynki pasywne są dostępne
                        w pakiecie do projektowania budynków pasywnych (PHPP) oraz w powrzechnie
                        dostępnej interentowej encyklopedii – PASSIPEDIA .
                    </p>
                </Route>
            </Switch>

            <Button textContent={'Ambasador button'} />
        </div>
    );
}
