import React, { useState, useEffect } from 'react';
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
    const [stickyClass, setStickyClass] = useState('');

    let changeNavVisibility = () => {
        setNavVisibility(!navVisibility);
    };

    useEffect(() => {
        setShowItem(null);
        window.addEventListener('scroll', stickNavbar);
        stickNavbar();
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let navbar = document.getElementsByClassName('navbar')[0];
            let sticky = navbar.offsetTop;

            window.pageYOffset > sticky ? setStickyClass('sticky') : setStickyClass('');
        }
    };

    return (
        <div className={`navbar ${stickyClass}`}>
            <img className="navbar__logo" src={pibpLogo} alt="PiBP Logo" />

            <p className="navbar__logo-title">POLSKI INSTYTUT BUDOWNICTWA PASYWNEGO</p>

            <ul className={`navbar__list ${navVisibility ? 'navbar__visible' : ''}`}>
                <li className="navbar__header">
                    <Link
                        to="/"
                        onClick={changeNavVisibility}
                        activeClassName="navbar__active-item"
                    >
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
                />
                <NavbarItem
                    item="Budynek pasywny"
                    subNavItems={passivhausNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                />
                <NavbarItem
                    item="Certyfikacja"
                    subNavItems={certificationNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                />
                <NavbarItem
                    item="Szkolenia"
                    subNavItems={workshopsNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                />
                <NavbarItem
                    item="Literatura i narzędzia"
                    subNavItems={literatureNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                />
                <NavbarItem
                    item="Ambasador Budownictwa Pasywnego"
                    subNavItems={ambassadorNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
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
