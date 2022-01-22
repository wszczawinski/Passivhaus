import React, { useState } from 'react';
import './NavbarItem.scss'

const NavbarItem = ({ item, children }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
        <li className='navbar-item'>
            <div onClick={handleClick}>
                {item}
            </div>

            {open && children}
        </li>
    );
};

export default NavbarItem;
