import React from 'react';
import { Button, Layout } from '../../components';
import heroWorkshops from '../../images/heroImages/hero_workshops.svg';
import { heroText } from '../../constants/heroContent';

import './Workshops.scss';

export default function ProjektantDoradztwo() {
    return (
        <Layout
            heroTextContent={heroText.workshopsText}
            heroBackgroundImage={heroWorkshops}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Doradztwo</h2>
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
