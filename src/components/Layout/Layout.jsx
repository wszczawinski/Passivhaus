import React from 'react';
import Head from './Head';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';

export function Layout({ children, heroTextContent, heroBackgroundImage, heroClass }) {
    return (
        <>
            <Head />
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
