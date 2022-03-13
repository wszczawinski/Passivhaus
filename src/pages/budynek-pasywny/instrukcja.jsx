import React from 'react';
import { Layout } from '../../components';
import heroPassivhaus from '../../images/heroImages/hero_passivehouse.svg';
import { heroText } from '../../constants/heroContent';

import './Passivhaus.scss';

export default function Instrukcja() {
    return (
        <Layout
            heroTextContent={heroText.passivhausInstrukcja}
            heroBackgroundImage={heroPassivhaus}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>
            </section>
        </Layout>
    );
}
