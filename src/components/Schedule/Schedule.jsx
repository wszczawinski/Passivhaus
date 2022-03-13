import React from 'react';
import number1 from '../../images/home/1.svg';
import number2 from '../../images/home/2.svg';
import number3 from '../../images/home/3.svg';

import './Schedule.scss';

export function Schedule({ dates, place, title }) {
    return (
        <div className="schedule">
            <span className="schedule__title">Terminarz najbliższych szkoleń:</span>
            <span className="schedule__training-title">{title}</span>
            <div className="schedule__date">
                <img src={number1} alt="zjazd nr 1" />
                {dates[0]}
            </div>
            <div className="schedule__date">
                <img src={number2} alt="zjazd nr 2" />
                {dates[1]}
            </div>
            <div className="schedule__date">
                <img src={number3} alt="zjazd nr 3" />
                {dates[2]}
            </div>
            <span>{place}</span>
        </div>
    );
}
