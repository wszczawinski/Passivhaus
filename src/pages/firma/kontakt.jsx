import React from 'react';
import { Announcements, SubpageNavbar, Layout } from '../../components';
import { firmNavItems } from '../../constants/subNavItems';

export default function About() {
    return (
        <Layout>
            <Announcements />
            <SubpageNavbar navElements={firmNavItems} />
            <section className="layout-content">
                <h3>Kontact</h3>
                <p>
                    Polski Instytut Budownictwa Pasywnego i Energii Odnawialnej imienia Güntera
                    Schlagowskiego NON-PROFIT Sp. z o.o. ul. Homera 55 80-299 GDAŃSK (Osowa)
                </p>
                <ul>
                    <li>Numer KRS: 0000219538 VII Wydział Gospodarczy KRS, Gdańsk-Północ</li>
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
                    Tel.: +48 58 524 12 06 E-mail: h.fiuczek@pibp.pl Konto PL: Nr konta: 05 1140
                    1065 0000 3335 8600 1001
                    <br />
                    Konto EU: Nr konta: 05 1140 1065 0000 3335 8600 1002
                </p>
            </section>
        </Layout>
    );
}
