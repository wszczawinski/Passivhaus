import React from 'react';
import { Layout } from '../components';
import heroHomeImage from '../images/heroImages/hero_home.png';
import { heroText } from '../constants/heroContent';
import { StaticImage } from 'gatsby-plugin-image';

import '../App.scss';

export default function Home() {
    return (
        <Layout heroTextContent={heroText.homeText} heroBackgroundImage={heroHomeImage}>
            <h1>Hello world!</h1>
            <StaticImage
                src="../images/heroImages/hero_home.png"
                alt="A dinosaur"
                placeholder="blurred"
            />
        </Layout>
    );
}
