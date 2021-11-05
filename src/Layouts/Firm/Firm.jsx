import React from 'react';
import './Firm.scss';
import { Announcements, Button, SubpageNavbar } from '../../components';

export function Firm() {
    return (
        <div className="layout-content">
            <Announcements />
            <SubpageNavbar />
            <h2>Firma</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nihil est
                repellat consequatur quam enim! Error asperiores doloribus voluptatum eos
                consequuntur id animi nostrum. Vel consectetur explicabo officia atque natus!
            </p>

            <Button textContent={'Text'} />
        </div>
    );
}
