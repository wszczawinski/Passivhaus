import React from 'react';
import { Button, Layout } from '../../components';
import heroAmbassador from '../../images/heroImages/hero_ambassador.png';
import { heroText } from '../../constants/heroContent';

import './Ambassador.scss';

export default function Ambassador() {
    return (
        <Layout
            heroTextContent={heroText.ambassadorText}
            heroBackgroundImage={heroAmbassador}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Ambasador</h2>
                <p>
                    Ambasadorzy Budownictwa Pasywnego to grupa firm z różnych sektorów branży
                    budowlanej, które wprowadzają innowacje na Polski rynek w postaci komponentów i
                    systemów budowlanych zalecanych do stosowania w budynkach pasywnych oraz
                    świadczą usługi projektowania i budowy takich obiektów w oparciu o kryteria
                    budownictwa pasywnego według najwyższych standardów opracowanych przez
                    Passivhaus Institut Darmstadt.
                </p>

                <Button textContent={'Ambasador button'} />
            </section>
        </Layout>
    );
}
