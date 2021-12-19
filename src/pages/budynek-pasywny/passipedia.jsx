import React from 'react';
import { Button, SubpageNavbar, Layout } from '../../components';
import { passivhausNavItems } from '../../constants/subNavItems';
import heroPassivhaus from '../../images/heroImages/hero_passivhaus.png';
import { heroText } from '../../constants/heroContent';

import './Passivhaus.scss';

export default function Passipedia() {
    return (
        <Layout
            heroTextContent={heroText.passivhausText}
            heroBackgroundImage={heroPassivhaus}
            heroClass={'hero__subpage'}
        >
            <SubpageNavbar navElements={passivhausNavItems} />
            <section className="layout-content">
                <h2>passipedia</h2>
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
