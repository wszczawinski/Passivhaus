import React from 'react';
import './Firm.scss';
import { Announcements, Button, SubpageNavbar } from '../../components';

export function Firm() {
    return (
        <div className="layout-content">
            <Announcements />
            <SubpageNavbar />

            <Button textContent={'Text'} />
        </div>
    );
}
