import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { BiCookie } from 'react-icons/bi';
import Head from './Head';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import { withPrefix } from 'gatsby';
import './Layout.scss';

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
                <BiCookie /> Przeglądając naszą stronę internetową bez zmian w swojej przeglądarce,
                wyrażasz zgodę na wykorzystywanie przez nas plików cookies. Dzięki temu serwis
                internetowy pibp.pl może być maksymalnie bezpieczny i wygodny. Dowiec się więcej z
                naszej{' '}
                <a
                    href={withPrefix('polityka-prywatnosci.pdf')}
                    className="privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                >
                    Polityki prywatności
                </a>
                .
            </CookieConsent>
        </>
    );
}
