import React from 'react';
import { Layout } from '../components';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlogPost() {
    return (
        <Layout>
            <section className="layout-content">
                <h2>title</h2>
                <h3>info</h3>
                <div>{/* <GatsbyImage /> */}</div>
                {/* <div dangerouslySetInnerHTML={} /> */}
            </section>
        </Layout>
    );
}
