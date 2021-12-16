import React from 'react';
import heroImg from '../../images/heroFigure.svg';

import './Hero.scss';

export function Hero({ heroClass = '', text, backgroundImage }) {
	return (
		<section className={`hero ${heroClass}`}>
			<article style={{ backgroundImage: `url('${backgroundImage}')` }} className="hero__background-image" />
			<img src={heroImg} className="hero__figure" alt="" />
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
