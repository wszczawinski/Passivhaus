import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../';

import './NavbarItem.scss';

const NavbarItem = ({ item, subNavItems, changeVisibility, showItem, setShowItem }) => {
    const [open, setOpen] = useState(showItem === item)

    const handleClick = (e) => {
        console.log(e)
        setOpen(!open)
        if (showItem === item) {
            setShowItem(null);
          } else {
            setShowItem(item);
          }
    }
    const handleClose = () => setOpen(false);

    return (
        <li className="navbar-item">
            <div onClick={handleClick}>{item}</div>

            {showItem === item && (
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
                        <Link to={item.linkTo} onClick={changeVisibility}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </li>
    );
};

export default NavbarItem;
