import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import './SubpageNavbar.scss';

export function SubpageNavbar({ navElements }) {
    const { pathname } = useLocation();
    const undoIcon = [...navElements].splice(-1)[0];
    const navItemsToDisplay = navElements.slice(0, -1);

    return (
        <section className="subpage-navbar">
            {pathname !== undoIcon.path && (
                <Link className="subpage-navbar__element" key={undoIcon.name} to={undoIcon.path}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </Link>
            )}

            {navItemsToDisplay.map(element => {
                return (
                    <Link className="subpage-navbar__element" key={element.name} to={element.path}>
                        {element.name}
                    </Link>
                );
            })}
        </section>
    );
}
