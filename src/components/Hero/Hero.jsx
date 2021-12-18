import React from 'react';
import heroFigure from '../../images/heroFigure.svg';
import { GatsbyImage } from 'gatsby-plugin-image';

import './Hero.scss';

export function Hero({ heroClass = '', text, backgroundImage }) {
    return (
        <section className={`hero ${heroClass}`}>
            <GatsbyImage
                image={backgroundImage}
                className="hero__background-image"
                alt="hero-background-image"
            />
            <img src={heroFigure} className="hero__figure" alt="hero-figure" />
            <article className="hero__content-area">
                <h1 className="hero__content-area--title">
                    POLSKI INSTYTUT <br />
                    BUDOWNICTWA PASYWNEGO
                </h1>
                <h2 className="hero__content-area--subtitle">{text}</h2>
            </article>
        </section>
    );
}
