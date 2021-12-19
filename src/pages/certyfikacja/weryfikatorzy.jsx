import React from 'react';
import { SubpageNavbar, Layout } from '../../components';
import { certificationNavItems } from '../../constants/subNavItems';
import heroCertification from '../../images/heroImages/hero_certification.png';
import { heroText } from '../../constants/heroContent';

export default function Weryfikatorzy() {
    return (
        <Layout
            heroTextContent={heroText.certificationText}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <SubpageNavbar navElements={certificationNavItems} />
            <section className="layout-content">
                <h2>Weryfikatorzy</h2>
                <p>
                    Następujący eksperci zostali międzynarodowo akredytowani przez Instytut
                    Budownictwa Pasywnego (PHI) do certyfikowania w imieniu PHI budynków na całym
                    świecie zgodnie z normami budownictwa pasywnego i modernizacji EnerPHit.
                    arch.mgr.inz.Lukasz Smol arch.mgr.inż Tomasz Pyszczek dr. Andrzej Górka
                    arch.mgr.inż Marcin Stelmach arch.mgr.inż Cezary Sankowski
                </p>
            </section>
        </Layout>
    );
}
