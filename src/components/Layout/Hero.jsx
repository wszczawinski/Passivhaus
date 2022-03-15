import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import pibpLogo from '../../images/pibpLogo.png';

import './Hero.scss';

export default function Hero({ heroClass = '', text, backgroundImage }) {
    return (
        <section className={`hero ${heroClass}`}>
            <GatsbyImage
                image={backgroundImage}
                className="hero__background-image"
                alt="hero-background-image"
            />

            <article className="hero__content-area">
                <h1 className="hero__content-area--title">
                    POLSKI INSTYTUT <br />
                    BUDOWNICTWA PASYWNEGO
                    <img src={pibpLogo} />
                </h1>
                <h2 className="hero__content-area--subtitle">{text}</h2>
            </article>
        </section>
    );
}
