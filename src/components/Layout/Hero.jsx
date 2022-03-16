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
                    <img src={pibpLogo} alt="logo PIBP" />
                    <div className="hero__content-area--text">
                        <p>POLSKI INSTYTUT</p>
                        <p>BUDOWNICTWA</p>
                        <p>PASYWNEGO</p>
                    </div>
                </h1>
                <h2 className="hero__content-area--subtitle">{text}</h2>
            </article>
        </section>
    );
}
