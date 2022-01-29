import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button } from '../';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import pibpLogo from '../../images/pibpLogo.png';
import NavbarItem from './NavbarItem';
import {
    certificationDropdownItems,
    firmDropdownItems,
    ambassadorDropdownItems,
    workshopsDropdownItems,
    passivhausDropdownItems,
    literatureDropdownItems,
} from '../../constants/subNavItems';

export default function Navbar() {
    const [navVisibility, setNavVisibility] = useState(false);
    const [showItem, setShowItem] = useState(null);

    const desktopView = window.matchMedia('(min-width: 1000px)').matches;

    let changeNavVisibility = () => {
        if (!desktopView) {
            setNavVisibility(!navVisibility);
        }
    };

    return (
        <div className="navbar">
            <img className="navbar__logo" src={pibpLogo} alt="PiBP Logo" />
            {!desktopView && (
                <p className="navbar__logo-title">POLSKI INSTYTUT BUDOWNICTWA PASYWNEGO</p>
            )}
            <ul className={`navbar__list ${navVisibility ? 'navbar__visible' : ''}`}>
                <li className="navbar__home">
                    <Link to="/" onClick={changeNavVisibility}>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </li>

                <NavbarItem
                    item="Instytut"
                    subNavItems={firmDropdownItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Budynek pasywny"
                    subNavItems={passivhausDropdownItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Certyfikacja"
                    subNavItems={certificationDropdownItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Szkolenia"
                    subNavItems={workshopsDropdownItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Literatura i narzedzia"
                    subNavItems={literatureDropdownItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Ambasador Budownictwa Pasywnego"
                    subNavItems={ambassadorDropdownItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <li>
                    <Button
                        className={'btn__mini btn__white navbar__hamburger'}
                        textContent={<FontAwesomeIcon icon={faTimes} />}
                        onClick={changeNavVisibility}
                    />
                </li>
            </ul>
            <Button
                className={'btn__mini btn__black navbar__hamburger'}
                textContent={<FontAwesomeIcon icon={faBars} />}
                onClick={changeNavVisibility}
            />
        </div>
    );
}
