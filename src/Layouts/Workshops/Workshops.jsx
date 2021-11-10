import React from 'react';
import './Workshops.scss';
import { Button, SubpageNavbar } from '../../components';

export function Workshops() {
    return (
        <div className="layout-content">
            <SubpageNavbar />
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
