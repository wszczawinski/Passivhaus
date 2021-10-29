import React from 'react';
import './Hero.scss';

export function Hero({ heroClass = '', text, backgroundImage }) {
    return (
        <section className={`hero ${heroClass}`}>
            <article
                style={{ backgroundImage: `url('${backgroundImage}')` }}
                className="hero__background-image"
            />

            <article className="hero__content-area">
                <p>{text}</p>
            </article>
        </section>
    );
}
