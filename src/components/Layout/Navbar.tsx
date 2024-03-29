import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';

import { NavbarItem } from './NavbarItem';
import { Button } from '@/components';
import { certificationNavItems, firmNavItems, passivhausNavItems, shopNavItems, workshopsNavItems } from '@/constants/subNavItems';
import ambassadordLogo from '@/images/neu_AMBASSADOR_LOGO_PL.svg';
import pibpLogo from '@/images/pibpLogo.png';

import './Navbar.scss';

export const Navbar = () => {
    const [navVisibility, setNavVisibility] = useState(false);
    const [stickyClass, setStickyClass] = useState('');

    const changeNavVisibility = () => {
        setNavVisibility(!navVisibility);
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            const navbarElement = document.querySelector('.navbar') as HTMLElement;
            const navbarOffset = navbarElement.offsetTop;
            window.pageYOffset > navbarOffset ? setStickyClass('sticky') : setStickyClass('');
        }
    };

    return (
        <div className={`navbar ${stickyClass}`}>
            <a href="/" className="mobile-logo">
                <img className="navbar__logo" src={pibpLogo} alt="PiBP Logo" />

                <p className="navbar__logo-title">POLSKI INSTYTUT BUDOWNICTWA PASYWNEGO</p>
            </a>

            <ul className={`navbar__list ${navVisibility ? 'navbar__visible' : ''}`}>
                <li className="navbar__header">
                    <Link to="/" onClick={changeNavVisibility} activeClassName="navbar__active-item">
                        <FaHome />
                    </Link>
                    <Button className={'btn__mini btn__white navbar__hamburger'} content={<FaTimes />} onClick={changeNavVisibility} />
                </li>
                <NavbarItem item="Instytut" subNavItems={firmNavItems} changeVisibility={changeNavVisibility} />
                <NavbarItem item="Budynek pasywny" subNavItems={passivhausNavItems} changeVisibility={changeNavVisibility} />
                <li className="navbar__single-link">
                    <Link to="/blog/" onClick={changeNavVisibility} activeClassName="navbar__active-item" partiallyActive={true}>
                        <p>Blog</p>
                    </Link>
                </li>
                <NavbarItem item="Sklep" subNavItems={shopNavItems} changeVisibility={changeNavVisibility} />
                <NavbarItem item="Szkolenia" subNavItems={workshopsNavItems} changeVisibility={changeNavVisibility} />
                <NavbarItem item="Certyfikacja" subNavItems={certificationNavItems} changeVisibility={changeNavVisibility} />
                <li className="navbar__single-link">
                    <Link to="/ambasadorzy/" onClick={changeNavVisibility} activeClassName="navbar__active-item">
                        <p>
                            <img src={ambassadordLogo} alt="Logo ambasadorów budownictwa pasywnego" className="navbar__ambassadors--logo" />
                            mbasadorzy
                        </p>
                    </Link>
                </li>
            </ul>
            <Button className={'btn__mini btn__black navbar__hamburger'} content={<FaBars />} onClick={changeNavVisibility} />
        </div>
    );
};
