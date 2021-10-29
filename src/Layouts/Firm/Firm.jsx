import React from 'react';
import './Firm.scss';
import { Announcements, Button } from '../../components';

export function Firm() {
    return (
        <div>
            <Announcements />
            <Button className={'default_btn'} text={'text'} />
            Firm
        </div>
    );
}
