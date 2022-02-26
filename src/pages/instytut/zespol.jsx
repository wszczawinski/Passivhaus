import React from 'react';
import { Layout } from '../../components';

import { heroText } from '../../constants/heroContent';

import './Firm.scss';

export default function Zespol() {
    return (
        <Layout heroTextContent={heroText.firmText} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <div className="team">
                    <h3>Nasz zespół:</h3>
                    <ul>
                        <li>Maciej Kuzawiński - prezes PiBP </li>
                        <li>
                            Kamil Wiśniewski - dyrektor instytutu, trener,certyfikator PIBP 
                            <a href="mailto:kamil.wisniewski@pibp.pl"> kamil.wisniewski@pibp.pl</a>
                        </li>
                        <li>
                            Łukasz Krzysztoń - dyrektor ds. szkoleń i rozwoju 
                            <a href="mailto:l.krzyszton@pibp.pl"> l.krzyszton@pibp.pl</a>
                        </li>
                        <li>
                            Cezary Sankowski - kierownik akademii, certyfikator PIBP 
                            <a href="mailto:cezary.sankowski@pibp.pl"> cezary.sankowski@pibp.pl</a>
                        </li>
                        <li>
                            Andrzej Górka - trener, certyfikator PIBP 
                            <a href="mailto:andrzej.gorka@pibp.pl"> andrzej.gorka@pibp.pl</a>
                        </li>
                        <li>
                            Łukasz Smól - trener, certyfikator PIBP 
                            <a href="mailto:lukasz.smol@pibp.pl "> lukasz.smol@pibp.pl </a>
                        </li>
                        <li>
                            Tomasz Pyszczek - trener, certyfikator PIBP 
                            <a href="mailto:tomasz.pyszczek@pibp.pl">tomasz.pyszczek@pibp.pl</a>
                        </li>
                        <li>
                            Marcin Stelmach - trener, certyfikator PIBP 
                            <a href="mailto:marcin.stelmach@pibp.pl"> marcin.stelmach@pibp.pl</a>
                        </li>
                        <li>
                            Sławomir Tomasz Kwiatkowski - ekspert ds. certyfikacji komponentów 
                            <a href="mailto: s.kwiatkowski@pibp.pl"> s.kwiatkowski@pibp.pl</a>
                        </li>
                        <li>
                            Księgowość - tel. +48 (58) 524 12 00 
                            <a href="mailto:h.fiuczek@pibp.pl"> h.fiuczek@pibp.pl</a>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
}
