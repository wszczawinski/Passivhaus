import React from 'react';
import { Button, SubpageNavbar, Layout } from '../../components';
import { workshopsNavItems } from '../../constants/subNavItems';
import heroWorkshops from '../../images/heroImages/hero_workshops.png';
import { heroText } from '../../constants/heroContent';

import './Workshops.scss';

export default function Workshops() {
    return (
        <Layout
            heroTextContent={heroText.workshopsText}
            heroBackgroundImage={heroWorkshops}
            heroClass={'hero__subpage'}
        >
            <SubpageNavbar navElements={workshopsNavItems} />
            <section className="layout-content">
                <h2>Workshops</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>

                <Button textContent={'Workshops button'} />
            </section>
        </Layout>
    );
}
