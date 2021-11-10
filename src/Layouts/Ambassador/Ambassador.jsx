import React from 'react';
import { Button, SubpageNavbar } from '../../components';
import { ambassadorNavItems } from '../../constants/subNavItems'

import './Ambassador.scss';

export function Ambassador() {
    return (
        <div className="layout-content">
            <SubpageNavbar navElements={ambassadorNavItems} />
            <h2>Ambasador</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla
                ratione quam aspernatur consequuntur doloribus iste repellendus molestias cum
                incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium. Nemo!
            </p>
            <Button textContent={'Ambasador button'} />
        </div>
    );
}
