import React from 'react';
import reklama from '../../images/home/szkolenie_reklama_2.svg';

import './Schedule.scss';

export function Schedule({ title }) {
    return (
        <div className="schedule">
            <span className="schedule__title">Terminarz najbliższych szkoleń:</span>
            <img src={reklama} alt="reklama_szkolenia" />
        </div>
    );
}
