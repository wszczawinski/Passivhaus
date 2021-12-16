import React from 'react';
import { Hero, Navbar, Footer } from '..';

export function Layout({ children, heroTextContent, heroBackgroundImage, heroClass }) {
    return (
        <>
            <header>
                <Navbar />
                <Hero
                    text={heroTextContent}
                    backgroundImage={heroBackgroundImage}
                    heroClass={heroClass}
                />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
