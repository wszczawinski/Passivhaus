import React, { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { Subcategory } from '../';

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
            {showSubcategory
                ? item.subcategories.map(subcategory => (
                      <div className="ambassador__category-subcategories">
                          <Subcategory subcategory={subcategory} />
                      </div>
                  ))
                : null}
        </article>
    );
};
