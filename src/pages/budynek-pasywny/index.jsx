import React from 'react';
import { Button, Layout } from '../../components';
import heroPassivhaus from '../../images/heroImages/hero_passivehouse.svg';
import { heroText } from '../../constants/heroContent';

import './Passivhaus.scss';

export default function Charakterystyka() {
    return (
        <Layout
            heroTextContent={heroText.passivhausText}
            heroBackgroundImage={heroPassivhaus}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Charakterystyka</h2>
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
