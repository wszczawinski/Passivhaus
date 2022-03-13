import React from 'react';
import { Layout } from '../../components';
import heroCertification from '../../images/heroImages/hero_certification.svg';
import { heroText } from '../../constants/heroContent';

export default function Wykonawcy() {
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaWykonawcy}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <strong>Certyfikowany Mistrz Wykonawca Budownictwa Pasywnego</strong>
                <p>
                    Budynek pasywny to więcej niż suma jego części. Aby uniknąć błędów, konieczne
                    jest poznanie zależności i relacji wszystkich komponentów potrzebnych do budowy
                    budynku pasywnego. Zmiany i odstępstwa od ustalonego projektu powinny być
                    energetycznie ocenione. Mogą one mieć istotny wpływ na funkcjonowanie budynku. W
                    ramach dalszego dokształcania Mistrzów Wykonawców zostanie przekazana
                    fundamentalna wiedza fachowa na temat budowy budynków pasywnych. Celem szkolenia
                    na „Mistrza Wykonawcę Budownictwa Pasywnego” jest przekazanie uczestnikom
                    zaangażowanym w budowę w rozsądnym czasie ogólnego wrażenia koncepcji
                    budownictwa pasywnego. Po pomyślnym zdaniu egzaminu uczestnik otrzymuje
                    certyfikat "Certyfikowany Mistrz Wykonawca Budownictwa Pasywnego" i jest wpisany
                    na listę "Certyfikowanych Mistrzów Wykonawców Budownictwa Pasywnego ", co
                    zapewnia, że wszyscy zaangażowani w budowę w dowolnym czasie mają dostęp do
                    informacji o kwalifikowanych rzemieślnikach.
                </p>
                <strong>Budownictwo Pasywne to standard budowlany z przyszłością</strong>
                <p>
                    Budownictwo pasywne sprawdza się od wielu lat - w nowym budownictwie, jak
                    również w modernizacji. Począwszy od roku 2021 wszystkie nowe budynki muszą być
                    zgodne ze specyfikacją "Budynek o niemal zerowym zużyciu energii" (NZEB),
                    zgodnie z dyrektywą UE w sprawie budownictwa (EPBD). Budownictwo pasywne jest
                    podstawą do tego. Zakłady rzemieślnicze, które kształcą się na temat budownictwa
                    pasywnego, mają możliwość otwarcia lukratywnego biznesu. Wyszukaj
                    certyfikowanych wykonawców -
                    http://www.passivehouse-trades.org/mitgliederdatenbank.php
                </p>
            </section>
        </Layout>
    );
}
