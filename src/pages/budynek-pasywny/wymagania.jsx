import React from 'react';
import { Button, Layout } from '../../components';
import heroPassivhaus from '../../images/heroImages/hero_passivhaus.png';
import { heroText } from '../../constants/heroContent';

import './Passivhaus.scss';

export default function Wymagania() {
    return (
        <Layout
            heroTextContent={heroText.passivhausText}
            heroBackgroundImage={heroPassivhaus}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Wymagania</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>

                <Button textContent={'Passivehaus button'} />
            </section>
        </Layout>
    );
}
