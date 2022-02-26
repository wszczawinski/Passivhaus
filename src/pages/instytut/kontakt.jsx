import React from 'react';
import { Layout } from '../../components';

export default function About() {
    return (
        <Layout>
            <section className="layout-content">
                <div className="team">
                    <h3>Kontakt</h3>
                    <p>
                        Polski Instytut Budownictwa Pasywnego i Energii Odnawialnej imienia Güntera
                        Schlagowskiego NON-PROFIT Sp. z o.o.
                        <ul>
                            <li> ul. Homera 55 80-299 GDAŃSK (Osowa)</li>
                            <li>
                                Numer KRS: 0000219538 VII Wydział Gospodarczy KRS, Gdańsk-Północ
                            </li>
                            <li>Kapitał zakładowy 360.000 PLN</li>
                            <li>REGON 193102200</li>
                            <li>NIP PL 2040000444</li>
                        </ul>
                    </p>

                    <p>
                        Sekretariat:
                        <ul>
                            <li>Tel.: +48 58 524 12 00</li>
                            <li> Fax: +48 / 58 522 98 50</li>
                            <li> E-mail: pibp@pibp.pl</li>
                        </ul>
                    </p>
                    <p>
                        Księgowość:
                        <ul>
                            <li>Tel.: +48 58 524 12 06 E-mail: h.fiuczek@pibp.pl</li>
                            <li>Konto PL: Nr konta: 05 1140 1065 0000 3335 8600 1001</li>
                            <li> Konto EU: Nr konta: 05 1140 1065 0000 3335 8600 1002</li>
                        </ul>
                    </p>
                </div>
            </section>
        </Layout>
    );
}
