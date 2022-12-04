import React from 'react';

import './Ambassadors.scss';

export const Company = ({ company }) => {
    const { name, address, website, email, phone, link, image } = company;

    return (
        <div className="ambassador__category-company">
            <div className="ambassador__category-company-info">
                <p>{name}</p>
                {address ? <p>{address}</p> : null}
                {website ? (
                    <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                ) : null}
                {email ? <a href={`mailto:${email}`}>{email}</a> : null}
                {phone ? <a href={`tel:+${phone}`}> {phone}</a> : null}
            </div>
            {image ? (
                <a
                    className="ambassador__category-company-image"
                    href={link ? link : null}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={image} alt={name} />
                </a>
            ) : null}
        </div>
    );
};
