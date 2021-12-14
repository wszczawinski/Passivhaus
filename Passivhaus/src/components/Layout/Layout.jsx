import React from 'react';
import { Hero, Navbar, Footer } from '..';

export function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
