import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import pibpLogo from '@/images/pibpLogo.png';
import akredytacja from '@/images/akredytacja.svg';

import './Hero.scss';

interface HeroProps {
    heroClass: string;
    content: string | ReactNode;
    backgroundImage: IGatsbyImageData;
}

export const Hero = ({ heroClass = '', content, backgroundImage }: HeroProps) => {
    return (
        <section className={`hero ${heroClass}`}>
            <GatsbyImage image={backgroundImage} className="hero__background-image" alt="hero-background-image" />

            <article className="hero__content-area">
                <div className="hero__content-area--title">
                    <a href="/" className="hero__content-area--logo">
                        <img src={pibpLogo} alt="logo PIBP" />
                        <span className="hero__content-area--text">
                            <h1>
                                <p>Polski Instytut</p>
                                <p>Budownictwa</p>
                                <p>Pasywnego</p>
                            </h1>
                        </span>
                    </a>
                    <img src={akredytacja} alt="Akredytacja Instytutu Budownictwa Pasywnego" />
                </div>
                <h2 className="hero__content-area--subtitle">{content}</h2>
            </article>
        </section>
    );
};
