import React from 'react';
import { Button, SubpageNavbar, Layout } from '../../components';
import { literatureNavItems } from '../../constants/subNavItems';
import heroLiterature from '../../images/heroImages/hero_literature.png';
import { heroText } from '../../constants/heroContent';

import './Literature.scss';

export default function Literature() {
    return (
        <Layout
            heroTextContent={heroText.literatureText}
            heroBackgroundImage={heroLiterature}
            heroClass={'hero__subpage'}
        >
            <SubpageNavbar navElements={literatureNavItems} />
            <section className="layout-content">
                <h2>Literatura</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus
                    nulla ratione quam aspernatur consequuntur doloribus iste repellendus molestias
                    cum incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium.
                    Nemo!
                </p>

                <Button textContent={'Literature button'} />
            </section>
        </Layout>
    );
}