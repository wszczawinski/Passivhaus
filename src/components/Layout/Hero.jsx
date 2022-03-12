import React from 'react';

import './Hero.scss';

export default function Hero({ heroClass = '', text, backgroundImage }) {
    return (
        <section className={`hero ${heroClass}`}>
            <div
                className="hero__background-image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                alt="hero-background-image"
            />
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
