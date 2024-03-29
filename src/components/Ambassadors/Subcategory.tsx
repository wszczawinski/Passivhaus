import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow, BiInfoCircle } from 'react-icons/bi';

import { Company } from '../';
import { SubcategoryProps } from '@/constants/ambassadors';

import './Ambassadors.scss';

export const Subcategory = ({ subcategory }: { subcategory: SubcategoryProps }) => {
    const [showCompanies, setShowCompanies] = useState(false);

    const handleCompaniesVisibility = () => {
        setShowCompanies(!showCompanies);
    };

    return (
        <>
            <button onClick={handleCompaniesVisibility} className="ambassador__category-subcategory">
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
