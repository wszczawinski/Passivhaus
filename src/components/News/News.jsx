import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import './News.scss';

export function News({ singleNews }) {
    const {
        frontmatter: { title, content, thumb, slug },
        html,
    } = singleNews;

    return (
        <section className="single-news">
            <div className="single-news__text-content">
                <div className="single-news__title">{title}</div>
                <p>{content}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>

            <GatsbyImage image={getImage(thumb)} alt={slug} className="single-news__image" />
        </section>
    );
}
