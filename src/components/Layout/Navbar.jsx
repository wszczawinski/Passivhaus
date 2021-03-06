import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Button } from '../';
import './Navbar.scss';

import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import pibpLogo from '../../images/pibpLogo.png';
import ambassadordLogo from '../../images/neu_AMBASSADOR_LOGO_PL.svg';
import NavbarItem from './NavbarItem';
import {
    certificationNavItems,
    firmNavItems,
    workshopsNavItems,
    passivhausNavItems,
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
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let navbarOffset = document.querySelector('.navbar').offsetTop;
            window.pageYOffset > navbarOffset ? setStickyClass('sticky') : setStickyClass('');
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
                        <FaHome />
                    </Link>
                    <Button
                        className={'btn__mini btn__white navbar__hamburger'}
                        textContent={<FaTimes />}
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
                <li className="navbar__single-link">
                    <Link
                        to="/sklep/"
                        onClick={changeNavVisibility}
                        activeClassName="navbar__active-item"
                    >
                        <p>SKLEP</p>
                    </Link>
                </li>
                <NavbarItem
                    item="Szkolenia"
                    subNavItems={workshopsNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                />
                <NavbarItem
                    item="Certyfikacja"
                    subNavItems={certificationNavItems}
                    changeVisibility={changeNavVisibility}
                    showItem={showItem}
                />
                <li className="navbar__single-link">
                    <Link
                        to="/ambasadorzy/"
                        onClick={changeNavVisibility}
                        activeClassName="navbar__active-item"
                    >
                        <p>
                            <img
                                src={ambassadordLogo}
                                alt="Logo ambasador??w budownictwa pasywnego"
                                className="navbar__ambassadors--logo"
                            />
                            MBASADORZY
                        </p>
                    </Link>
                </li>
            </ul>
            <Button
                className={'btn__mini btn__black navbar__hamburger'}
                textContent={<FaBars />}
                onClick={changeNavVisibility}
            />
        </div>
    );
}
