import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow, BiInfoCircle } from 'react-icons/bi';
import { Company } from '../';

import './Ambassadors.scss';

export const Subcategory = ({ subcategory }) => {
    const [showCompanies, setShowCompanies] = useState(false);

    const companiesVisibility = () => {
        setShowCompanies(!showCompanies);
    };

    return (
        <>
            <button onClick={companiesVisibility} className="ambassador__category-subcategory">
                <p>{subcategory.title}</p>
                {!showCompanies ? <BiDownArrow /> : <BiUpArrow />}
            </button>

            {showCompanies ? (
                subcategory.companies ? (
                    <div className="ambassador__category-companies">
                        {subcategory.companies.map(company => (
                            <Company company={company} />
                        ))}
                    </div>
                ) : (
                    <div className="ambassador__category-text">
                        <BiInfoCircle /> <p>{subcategory.text}</p>
                    </div>
                )
            ) : null}
        </>
    );
};
