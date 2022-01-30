import React from 'react';
import { Button, Layout } from '../../components';
import heroCertification from '../../images/heroImages/hero_certification.png';
import { heroText } from '../../constants/heroContent';

import './Certification.scss';

export default function Certification() {
    return (
        <Layout
            heroTextContent={heroText.certificationText}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Certyfikacja</h2>
                <p>
                    Certyfikacja budynków pasywnych zapewnia, że wysokie wymagania jakościowe
                    standardów budownictwa pasywnego są spełnione. Ale nie tylko budynki mogą
                    otrzymać certyfikat od Instytutu Budownictwa Pasywnego, ale także produkty i
                    rozwiązania szczegółowe, tak samo jak projektanci, inżynierowie, rzemieślnicy i
                    konsultanci/doradcy.
                    <br />
                    Certyfikowany Projektant \ Doradca Budownictwa Pasywnego i Mistrz Wykonawca
                    Budownictwa Pasywnego nabywa niezbędną wiedzę na temat budownictwa pasywnego
                    poprzez praktyczne doświadczenia przy projekcie pasywnym lub EnerPHit lub przez
                    zdanie egzaminu. Korzystanie z komponentów, które są certyfikowane przez
                    Instytut Budownictwa Pasywnego, ułatwia planowanie budynków i znacznie
                    przyczynia się do zapewnienia prawidłowego funkcjonowania powstających budynków
                    pasywnych. Certyfikaty "Certyfikowany Budynek Pasywny ", "EnerPHit -
                    Certyfikowana modernizacja" i "Dom energooszczędny" przyznawane są dopiero po
                    szczegółowym zbadaniu przez Instytut Budownictwa Pasywnego lub inny podmiot
                    akredytowany. Jest to znak jakości dla całego budynku.
                    <br />
                    <ul>
                        <li>Komponenty</li>
                        <li>Budynki</li>
                        <li>Certyfikowany Projektant \ Doradca Budownictwa Pasywnego</li>
                        <li>Mistrz Wykonawca Budownictwa Pasywnego</li>
                    </ul>
                </p>

                <Button textContent={'Certyfikacja button'} />
            </section>
        </Layout>
    );
}
