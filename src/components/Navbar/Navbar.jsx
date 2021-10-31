import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import pibpLogo from '../../images/pibpLogo.png';

export function Navbar() {
    const [navToggle, setNavToggle] = useState('tak');

    return (
        <nav className="navbar">
            <img className="navbar__logo" src={pibpLogo} alt="PiBP Logo" />

            <ul className="navbar__list navbar__visible">
                <li>
                    <Link to="/">Firma</Link>
                </li>
                <li>
                    <Link to="/budynek-pasywny">Budynek pasywny</Link>
                </li>
                <li>
                    <Link to="/certyfikacja">Certyfikacja</Link>
                </li>
                <li>
                    <Link to="/szkolenia">Szkolenia</Link>
                </li>
                <li>
                    <Link to="/literatura+narzedzia">Literatura i narzędzia</Link>
                </li>
                <li>
                    <Link to="/ambasador">Ambasador Budownictwa Pasywnego</Link>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </li>
            </ul>

            <span class="navbar__toggle">
                <FontAwesomeIcon icon={faBars} />
            </span>
        </nav>
    );
}
