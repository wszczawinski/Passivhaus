import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import pibpLogo from '../../images/pibpLogo.png';

export function Navbar() {
	const [ navVisibility, setNavVisibility ] = useState(false);
	const mobileView = !window.matchMedia('(min-width: 1000px)');

	let changeNavVisibility = () => {
		if (mobileView) {
			setNavVisibility(!navVisibility);
		}
	};

	return (
		<nav className="navbar">
			<img className="navbar__logo" src={pibpLogo} alt="PiBP Logo" />

			<ul className={`navbar__list ${navVisibility ? 'navbar__visible' : ''}`}>
				<div className="navbar__list--upper-items">
					<li>
						<Link to="/" onClick={changeNavVisibility}>
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
						<Link to="/literatura+narzedzia" onClick={changeNavVisibility}>
							Literatura i narzędzia
						</Link>
					</li>
				</div>

				<li className="navbar__list--lower-item">
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
		</nav>
	);
}
