import React from 'react';
import { Button, SubpageNavbar } from '../../components';
import { workshopsNavItems } from '../../constants/subNavItems';

import './Workshops.scss';

export function Workshops() {
    return (
        <div className="layout-content">
            <SubpageNavbar navElements={workshopsNavItems} />
            <h2>Workshops</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla
                ratione quam aspernatur consequuntur doloribus iste repellendus molestias cum
                incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium. Nemo!
            </p>
            <Button textContent={'Workshops button'} />
        </div>
    );
}
