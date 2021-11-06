import React from 'react';
import './Literature.scss';
import { Button } from '../../components';

export function Literature() {
    return (
        <div className="layout-content">
            <h2>Literatura</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla
                ratione quam aspernatur consequuntur doloribus iste repellendus molestias cum
                incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium. Nemo!
            </p>
            <Button textContent={'Literature button'} />
        </div>
    );
}
