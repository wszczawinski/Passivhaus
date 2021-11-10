import React from 'react';
import { Link } from 'react-router-dom';
import './SubpageNavbar.scss';

export function SubpageNavbar({ navElements }) {
    return (
        <ul>
            {navElements.map(element => {
                console.log(element);
                return (
                    <Link key={element.name} to={element.path}>
                        {element.name}
                    </Link>
                );
            })}
        </ul>
    );
}
