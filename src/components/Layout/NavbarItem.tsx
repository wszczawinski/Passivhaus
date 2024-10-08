import { Link, withPrefix } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import { Button } from '@/components';
import { SubNavItem } from '@/constants/subNavItems';
import { checkActiveNavigation } from '@/helpers/checkActiveNavigation';

import './NavbarItem.scss';

interface INavbarItem {
    item: string;
    subNavItems: SubNavItem[];
    changeVisibility: () => void;
}

export const NavbarItem = ({ item, subNavItems, changeVisibility }: INavbarItem) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(false);

    useEffect(() => {
        checkActiveNavigation(item, setActiveItem);

        window.addEventListener('mouseup', (e: MouseEvent) => {
            const container = document.getElementById(item);
            if (e.target instanceof HTMLElement && !container.contains(e.target)) {
                setOpen(false);
            }
        });

        return () => {
            setActiveItem(false);
        };
    }, [item]);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClose = () => setOpen(false);

    return (
        <li className="navbar-item" id={item} onClick={handleClick} onKeyDown={handleClick}>
            <div className={activeItem ? 'navbar-item__active' : ''}>{item}</div>

            {open && (
                <div className="dropdown">
                    <Button
                        className={'btn__white dropdown__back-button'}
                        content={
                            <span>
                                <FaChevronLeft />
                                <p>Menu główne</p>
                            </span>
                        }
                        onClick={handleClose}
                    />
                    {subNavItems.map(item =>
                        item.name === 'Regulamin' ? (
                            <a key={item.name} href={withPrefix('Regulamin.pdf')} target="_blank" rel="noreferrer noopener">
                                {item.name}
                            </a>
                        ) : (
                            <Link key={item.name} to={item.path} onClick={changeVisibility} activeClassName="dropdown__active-item">
                                {item.name}
                            </Link>
                        ),
                    )}
                </div>
            )}
        </li>
    );
};
