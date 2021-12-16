import React from 'react';
import { Layout } from '../components';
import heroHomeImage from '../images/heroImages/hero_home.png';
import { heroText } from '../constants/heroContent';

import '../App.scss';

export default function Home() {
    return (
        <Layout heroTextContent={heroText.homeText} heroBackgroundImage={heroHomeImage}>
            <h1>Hello world!</h1>
        </Layout>
    );
}
