import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import pibpLogo from '../../images/pibpLogo.png';
import akredytacja from '../../images/akredytacja.svg';

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
                <div className="hero__content-area--title">
                    <div className="hero__content-area--logo">
                        <img src={pibpLogo} alt="logo PIBP" />
                        <span className="hero__content-area--text">
                            <h1>
                                <p>POLSKI INSTYTUT</p>
                                <p>BUDOWNICTWA</p>
                                <p>PASYWNEGO</p>
                            </h1>
                        </span>
                    </div>
                    <img src={akredytacja} alt="Akredytacja Instytutu Budownictwa Pasywnego" />
                </div>
                <h2 className="hero__content-area--subtitle">{text}</h2>
            </article>
        </section>
    );
}
