import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

import { Subcategory, Company } from '../';
import { AmbassadorProps } from '@/constants/ambassadors';

import './Ambassadors.scss';

export const Category = ({ ambassador }: { ambassador: AmbassadorProps }) => {
    const [showSubcategory, setShowSubcategory] = useState(false);

    const handleSubcategoryVisibility = () => {
        setShowSubcategory(!showSubcategory);
    };

    const { category, subcategories, companies } = ambassador;

    return (
        <article className="ambassador__category">
            <button onClick={handleSubcategoryVisibility} className="ambassador__category-title">
                <h3>{category}</h3>
                {!showSubcategory ? <BiDownArrow /> : <BiUpArrow />}
            </button>
            <div className="ambassador__category-container">
                {showSubcategory ? (
                    subcategories ? (
                        subcategories.map(subcategory => <Subcategory subcategory={subcategory} />)
                    ) : (
                        <div className="ambassador__category-companies">{companies?.map(company => <Company company={company} />)}</div>
                    )
                ) : null}
            </div>
        </article>
    );
};
