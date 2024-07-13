import React, { ReactNode } from 'react';
import CookieConsent from 'react-cookie-consent';
import { BiCookie } from 'react-icons/bi';
import { withPrefix } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Head, MetaTags } from './Head';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';

import './Layout.scss';

interface LayoutProps {
    children: ReactNode;
    heroTextContent: ReactNode;
    heroBackgroundImage?: IGatsbyImageData;
    heroClass?: string;
    metaTags?: MetaTags;
}

export const Layout = ({ children, heroTextContent, heroBackgroundImage, heroClass, metaTags }: LayoutProps) => {
    return (
        <>
            <Head {...metaTags} />
            <header>
                <Navbar />
                <Hero content={heroTextContent} backgroundImage={heroBackgroundImage} heroClass={heroClass} />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
            <CookieConsent
                location="bottom"
                buttonText="Akceptuję"
                cookieName="myAwesomeCookieName2"
                style={{
                    background: '#faf2e8',
                    padding: '0 5%',
                    color: '#043454',
                    fontSize: '14px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                buttonStyle={{
                    background: '#D86018',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '12px',
                }}
                expires={150}
            >
                <BiCookie /> Przeglądając naszą stronę internetową bez zmian w swojej przeglądarce, wyrażasz zgodę na wykorzystywanie przez nas plików cookies.
                Dzięki temu serwis internetowy pibp.pl może być maksymalnie bezpieczny i wygodny. Dowiec się więcej z naszej{' '}
                <a href={withPrefix('polityka-prywatności-serwisu-www.pibp.pl.pdf')} className="privacy-policy" target="_blank" rel="noreferrer">
                    Polityki prywatności
                </a>
                .
            </CookieConsent>
        </>
    );
};
