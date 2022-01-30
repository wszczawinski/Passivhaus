import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button } from '../';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import pibpLogo from '../../images/pibpLogo.png';
import NavbarItem from './NavbarItem';
import {
    certificationNavItems,
    firmNavItems,
    ambassadorNavItems,
    workshopsNavItems,
    passivhausNavItems,
    literatureNavItems,
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
                <li className="navbar__header">
                    <Link to="/" onClick={changeNavVisibility}>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <Button
                        className={'btn__mini btn__white navbar__hamburger'}
                        textContent={<FontAwesomeIcon icon={faTimes} />}
                        onClick={changeNavVisibility}
                    />
                </li>

                <NavbarItem
                    item="Instytut"
                    subNavItems={firmNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Budynek pasywny"
                    subNavItems={passivhausNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Certyfikacja"
                    subNavItems={certificationNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Szkolenia"
                    subNavItems={workshopsNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Literatura i narzedzia"
                    subNavItems={literatureNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
                <NavbarItem
                    item="Ambasador Budownictwa Pasywnego"
                    subNavItems={ambassadorNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                    setShowItem={setShowItem}
                />
            </ul>
            <Button
                className={'btn__mini btn__black navbar__hamburger'}
                textContent={<FontAwesomeIcon icon={faBars} />}
                onClick={changeNavVisibility}
            />
        </div>
    );
}
