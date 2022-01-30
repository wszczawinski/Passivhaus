import React from 'react';
import { Button, Layout } from '../../components';
import heroFirmImage from '../../images/heroImages/hero_firma.png';
import { heroText } from '../../constants/heroContent';

import './Firm.scss';

export default function Instytut() {
    return (
        <Layout
            heroTextContent={heroText.firmText}
            heroBackgroundImage={heroFirmImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Firma</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nihil est
                    repellat consequatur quam enim! Error asperiores doloribus voluptatum eos
                    consequuntur id animi nostrum. Vel consectetur explicabo officia atque natus!
                </p>

                <Button textContent={'Text'} />
            </section>
        </Layout>
    );
}
