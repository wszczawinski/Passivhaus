import React from 'react';

import './Ambassadors.scss';

export const Company = ({ company }) => {
    return (
        <div className="ambassador__category-company">
            <div className="ambassador__category-company-info">
                <p>{company.name}</p>
                {company.address ? <p>{company.address}</p> : null}
                {company.website ? (
                    <a href={`http://${company.website}`} target="_blank" rel="noopener noreferrer">
                        {company.website}
                    </a>
                ) : null}
                {company.email ? <a href={`mailto:${company.email}`}>{company.email}</a> : null}
                {company.phone ? <a href={`tel:+${company.phone}`}> {company.phone}</a> : null}
            </div>
            <a
                className="ambassador__category-company-image"
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={company.image} alt={company.name} />
            </a>
        </div>
    );
};
