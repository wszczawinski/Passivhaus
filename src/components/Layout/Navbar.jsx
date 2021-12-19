import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button } from '../';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import pibpLogo from '../../images/pibpLogo.png';

export default function Navbar() {
    const [navVisibility, setNavVisibility] = useState(false);
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
                <li>
                    <Link to="/" onClick={changeNavVisibility}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/firma" onClick={changeNavVisibility}>
                        Firma
                    </Link>
                </li>
                <li>
                    <Link to="/budynek-pasywny" onClick={changeNavVisibility}>
                        Budynek pasywny
                    </Link>
                </li>
                <li>
                    <Link to="/certyfikacja" onClick={changeNavVisibility}>
                        Certyfikacja
                    </Link>
                </li>
                <li>
                    <Link to="/szkolenia" onClick={changeNavVisibility}>
                        Szkolenia
                    </Link>
                </li>
                <li>
                    <Link to="/literatura" onClick={changeNavVisibility}>
                        Literatura i narzędzia
                    </Link>
                </li>

                <li>
                    <Link to="/ambasador" onClick={changeNavVisibility}>
                        Ambasador Budownictwa Pasywnego
                    </Link>
                </li>
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
