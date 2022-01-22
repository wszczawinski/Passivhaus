import React from 'react';
import { Link } from 'gatsby';

import './Dropdown.scss'

const Dropdown = ({ subNavItems, changeVisibility }) => {
    return (
        <div className='dropdown'>
            {subNavItems.map(item => (
                    <Link to={item.linkTo} onClick={changeVisibility}>
                        {item.name}
                    </Link>
            ))}
        </div>
    );
};

export default Dropdown;
