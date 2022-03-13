import React from 'react';
import { Layout } from '../../components';
import heroCertification from '../../images/heroImages/hero_certification.svg';
import { heroText } from '../../constants/heroContent';

export default function ListaBudynkow() {
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaListaBudynkow}
            heroBackgroundImage={heroCertification}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
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
