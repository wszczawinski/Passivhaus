import React from 'react';
import { Link } from 'react-router-dom';
import './SubpageNavbar.scss';

export function SubpageNavbar({ navElements }) {
    return (
        <ul>
            {navElements.map(element => {
                return (
                    <Link key={element[0]} to={element[1]}>
                        {element[0]}
                    </Link>
                );
            })}
        </ul>
    );
}
