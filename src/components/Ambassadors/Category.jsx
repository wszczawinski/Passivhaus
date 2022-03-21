import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow, BiInfoCircle } from 'react-icons/bi';
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
                {showSubcategory ? (
                    item.subcategories ? (
                        item.subcategories.map(subcategory => (
                            <Subcategory subcategory={subcategory} />
                        ))
                    ) : item.companies ? (
                        <div className="ambassador__category-companies">
                            {item.companies?.map(company => (
                                <Company company={company} />
                            ))}
                        </div>
                    ) : (
                        <div className="ambassador__category-text">
                            <BiInfoCircle /> <p>{item.text}</p>
                        </div>
                    )
                ) : null}
            </div>
        </article>
    );
};
