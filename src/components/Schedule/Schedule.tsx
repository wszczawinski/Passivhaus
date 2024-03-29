import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import './Schedule.scss';

export const Schedule = ({ scheduleImage }) => {
    return (
        <div className="schedule">
            <span className="schedule__title">Terminarz najbliższych szkoleń:</span>
            <GatsbyImage image={scheduleImage} className="schedule__image" alt="reklama_szkolenia" />
        </div>
    );
};
