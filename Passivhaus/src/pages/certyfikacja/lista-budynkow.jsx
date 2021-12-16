import React from 'react';
import { SubpageNavbar, Layout } from '../../components';
import { certificationNavItems } from '../../constants/subNavItems';
import heroCertification from '../../images/heroImages/hero_certification.png';
import { heroText } from '../../constants/heroContent';

export default function ListaBudynkow() {
    return (
        <Layout
            heroTextContent={heroText.certificationText}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <SubpageNavbar navElements={certificationNavItems} />
            <section className="layout-content">
                <h2>Lista budynkow</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, ratione
                    sint! Praesentium cum eveniet consequatur recusandae? Quas iure perspiciatis
                    incidunt vitae veritatis id eos minus provident repellat quam corporis accusamus
                    ex adipisci maxime aliquam fugiat, cumque temporibus dolor eaque, harum, quos
                    laboriosam esse doloribus quibusdam. Accusamus officia explicabo ex eos.
                </p>
            </section>
        </Layout>
    );
}
