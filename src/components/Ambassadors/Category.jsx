import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { Subcategory, Company } from '../';

import './Ambassadors.scss';

export const Category = ({ item }) => {
    const [showSubcategory, setShowSubcategory] = useState(false);

    const changeSubcategoryVisibility = () => {
        setShowSubcategory(!showSubcategory);
    };

    return (
        <article className="ambassador__category">
            <button onClick={changeSubcategoryVisibility} className="ambassador__category-title">
                <h3>{item.category}</h3>
                {!showSubcategory ? <BiDownArrow /> : <BiUpArrow />}
            </button>
            <div className="ambassador__category-container">
                {showSubcategory
                    ? item.subcategories
                        ? item.subcategories.map(subcategory => (
                              <Subcategory subcategory={subcategory} />
                          ))
                        : item.companies?.map(company => <Company company={company} />)
                    : null}
            </div>
        </article>
    );
};
