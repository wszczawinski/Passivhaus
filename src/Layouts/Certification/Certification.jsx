import React from 'react';
import { Button, SubpageNavbar } from '../../components';
import { certificationNavItems } from '../../constants/subNavItems'

import './Certification.scss';

export function Certification() {
    return (
        <div className="layout-content">
            <SubpageNavbar navElements={certificationNavItems} />
            <h2>Certyfikacja</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla
                ratione quam aspernatur consequuntur doloribus iste repellendus molestias cum
                incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium. Nemo!
            </p>
            <Button textContent={'Certyfikacja button'} />
        </div>
    );
}
