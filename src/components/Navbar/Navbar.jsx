import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export function Navbar() {
    return (
        <nav className="navbar">
            <h1>LOGO</h1>
            <ul>
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
            </ul>
        </nav>
    );
}
