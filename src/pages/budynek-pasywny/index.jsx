import React from 'react';
import { Button, SubpageNavbar, Layout } from '../../components';
import { passivhausNavItems } from '../../constants/subNavItems';
import heroPassivhaus from '../../images/heroImages/hero_passivhaus.png';
import { heroText } from '../../constants/heroContent';

import './Passivhaus.scss';

export default function Passivhaus() {
    return (
        <Layout
            heroTextContent={heroText.passivhausText}
            heroBackgroundImage={heroPassivhaus}
            heroClass={'hero__subpage'}
        >
            <SubpageNavbar navElements={passivhausNavItems} />
            <section className="layout-content">
                <h2>Passivhaus</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>

                {/* <Route exact path="/budynek-pasywny/charakterystyka">
                        <p>charakterystyka</p>
                    </Route>
                    <Route exact path="/budynek-pasywny/wymagania">
                        <p>wymagania</p>
                    </Route>
                    <Route exact path="/budynek-pasywny/instrukcja">
                        <p>instrukcja</p>
                    </Route>
                    <Route exact path="/budynek-pasywny/passipedia">
                        <p>passipedia</p>
                    </Route>
                    <Route exact path="/budynek-pasywny/historia">
                        <p>historia</p>
                    </Route> */}

                <Button textContent={'Passivehaus button'} />
            </section>
        </Layout>
    );
}
