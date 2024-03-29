import React from 'react';
import { BiPhone, BiEnvelope, BiInfoCircle } from 'react-icons/bi';

import { CompanyProps } from '@/constants/ambassadors';

import './Ambassadors.scss';

export const Company = ({ company }: { company: CompanyProps }) => {
    const { name, address, website, email, phone, link, image } = company;

    return (
        <div className="ambassador__category-company">
            <div className="ambassador__category-company-info">
                <p className="ambassador__category-company-name">{name}</p>
                {address ? <p>{address}</p> : null}
                {website ? (
                    <span className="ambassador__category-company-contact">
                        <BiInfoCircle />{' '}
                        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
                            {website}
                        </a>
                    </span>
                ) : null}
                {email ? (
                    <span className="ambassador__category-company-contact">
                        <BiEnvelope /> <a href={`mailto:${email}`}>{email}</a>
                    </span>
                ) : null}
                {phone ? (
                    <span className="ambassador__category-company-contact">
                        {' '}
                        <BiPhone /> <a href={`tel:+${phone}`}> {phone}</a>{' '}
                    </span>
                ) : null}
            </div>
            {image ? (
                <a className="ambassador__category-company-image" href={link ? link : null} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={name} />
                </a>
            ) : null}
        </div>
    );
};
