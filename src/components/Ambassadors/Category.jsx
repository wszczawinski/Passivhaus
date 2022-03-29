import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow, BiInfoCircle } from 'react-icons/bi';
import { Subcategory, Company } from '../';

import './Ambassadors.scss';

export const Category = ({ item }) => {
    const [showSubcategory, setShowSubcategory] = useState(false);

    const handleSubcategoryVisibility = () => {
        setShowSubcategory(!showSubcategory);
    };

    const { category, subcategories, companies, text } = item;

    return (
        <article className="ambassador__category">
            <button onClick={handleSubcategoryVisibility} className="ambassador__category-title">
                <h3>{category}</h3>
                {!showSubcategory ? <BiDownArrow /> : <BiUpArrow />}
            </button>
            <div className="ambassador__category-container">
                {showSubcategory ? (
                    subcategories ? (
                        subcategories.map(subcategory => (
                            <Subcategory subcategory={subcategory} />
                        ))
                    ) : companies ? (
                        <div className="ambassador__category-companies">
                            {companies?.map(company => (
                                <Company company={company} />
                            ))}
                        </div>
                    ) : (
                        <div className="ambassador__category-text">
                            <BiInfoCircle /> <p>{text}</p>
                        </div>
                    )
                ) : null}
            </div>
        </article>
    );
};
