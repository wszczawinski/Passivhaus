import React from 'react';

import './Ambassadors.scss';

export const Company = ({ company }) => {
    return (
        <div className="ambassador__category-company">
            <p>{company.name}</p>
        </div>
    );
};
