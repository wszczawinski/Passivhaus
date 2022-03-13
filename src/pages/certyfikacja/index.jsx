import React from 'react';
import { Layout, ContainerColumn } from '../../components';
import heroCertification from '../../images/heroImages/hero_certification.svg';
import { heroText } from '../../constants/heroContent';
import Standard from '../../images/certyfikacja/standard.svg';

import './Certification.scss';

export default function Certification() {
    return (
        <Layout
            heroTextContent={heroText.certyfikacja}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerColumn
                    textStart={
                        <p className="certificate__main">
                            Certyfikacja budynków pasywnych zapewnia, że wysokie wymagania
                            jakościowe standardów budownictwa pasywnego są spełnione. Ale nie tylko
                            budynki mogą otrzymać certyfikat od Instytutu Budownictwa Pasywnego, ale
                            także produkty i rozwiązania szczegółowe, tak samo jak projektanci,
                            inżynierowie, rzemieślnicy i konsultanci/doradcy.
                        </p>
                    }
                    textEnd={
                        <p>
                            Certyfikowany Projektant \ Doradca Budownictwa Pasywnego i Mistrz
                            Wykonawca Budownictwa Pasywnego nabywa niezbędną wiedzę na temat
                            budownictwa pasywnego poprzez praktyczne doświadczenia przy projekcie
                            pasywnym lub EnerPHit lub przez zdanie egzaminu. Korzystanie z
                            komponentów, które są certyfikowane przez Instytut Budownictwa
                            Pasywnego, ułatwia planowanie budynków i znacznie przyczynia się do
                            zapewnienia prawidłowego funkcjonowania powstających budynków pasywnych.
                            Certyfikaty
                            <strong>
                                "Certyfikowany Budynek Pasywny ", "EnerPHit - Certyfikowana
                                modernizacja" i "Dom energooszczędny"
                            </strong>
                            przyznawane są dopiero po szczegółowym zbadaniu przez Instytut
                            Budownictwa Pasywnego lub inny podmiot akredytowany. Jest to znak
                            jakości dla całego budynku.
                        </p>
                    }
                    imgSrc={Standard}
                    alt="Standard"
                    shortBorder
                />
            </section>
        </Layout>
    );
}
