import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../';

import './NavbarItem.scss';

const NavbarItem = ({ item, subNavItems, changeVisibility, showItem, setShowItem }) => {
    const [open, setOpen] = useState(showItem === item);

    document.addEventListener('mouseup', e => {
        const container = document.getElementById(item);
        if (!container.contains(e.target)) {
            setOpen(false);
        }
    });

    const handleClick = () => {
        setOpen(!open);
        if (showItem === item) {
            setShowItem(null);
        } else {
            setShowItem(item);
        }
    };
    const handleClose = () => setOpen(false);

    return (
        <li className="navbar-item" id={item} onClick={handleClick} onKeyDown={handleClick}>
            <div>{item}</div>

            {open && (
                <div className="dropdown">
                    <Button
                        className={'btn__white dropdown__back-button'}
                        textContent={
                            <span>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <p>Menu główne</p>
                            </span>
                        }
                        onClick={handleClose}
                    />
                    {subNavItems.map(item => (
                        <Link key={item.name} to={item.linkTo} onClick={changeVisibility}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </li>
    );
};

export default NavbarItem;
