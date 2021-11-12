import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import './SubpageNavbar.scss';

export function SubpageNavbar({ navElements }) {
	const { pathname } = useLocation();
	const undoIcon = [ ...navElements ].splice(-1)[0];
	const navItemsToDisplay = navElements.slice(0, -1);

	return (
		<ul className="subpage-navbar">
			{pathname !== undoIcon.path && (
				<Link key={undoIcon.name} to={undoIcon.path}>
					<FontAwesomeIcon icon={faAngleDoubleLeft} />
				</Link>
			)}

			{navItemsToDisplay.map((element) => {
				return (
					<Link key={element.name} to={element.path}>
						{element.name}
					</Link>
				);
			})}
		</ul>
	);
}
