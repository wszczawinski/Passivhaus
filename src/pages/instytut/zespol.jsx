import React from 'react';
import { Layout } from '../../components';

import { heroText } from '../../constants/heroContent';

import './Firm.scss';

export default function Zespol() {
    return (
        <Layout heroTextContent={heroText.firmText} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <p>Maciej Kuzawiński - prezes PiBP </p>
                <p>
                    Kamil Wiśniewski - dyrektor instytutu, trener,certyfikator PIBP ::
                    kamil.wisniewski@pibp.pl
                </p>
                <p>Łukasz Krzysztoń - dyrektor ds. szkoleń i rozwoju :: l.krzyszton@pibp.pl </p>
                <p>
                    Cezary Sankowski - kierownik akademii, certyfikator PIBP ::
                    cezary.sankowski@pibp.pl
                </p>
                <p>Andrzej Górka - trener, certyfikator PIBP :: andrzej.gorka@pibp.pl </p>
                <p>Łukasz Smól - trener, certyfikator PIBP :: lukasz.smol@pibp.pl </p>
                <p>Tomasz Pyszczek - trener, certyfikator PIBP :: tomasz.pyszczek@pibp.pl </p>
                <p> Marcin Stelmach - trener, certyfikator PIBP :: marcin.stelmach@pibp.pl </p>
                <p>
                    Sławomir Tomasz Kwiatkowski - ekspert ds. certyfikacji komponentów;
                    s.kwiatkowski@pibp.pl
                </p>
                <p>Księgowość - tel. +48 (58) 524 12 00 :: h.fiuczek@pibp.pl</p>
            </section>
        </Layout>
    );
}
