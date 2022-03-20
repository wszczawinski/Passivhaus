import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
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
                    subcategory.companies.map(company => <Company company={company} />)
                ) : (
                    <p>{subcategory.text}</p>
                )
            ) : null}
        </>
    );
};
