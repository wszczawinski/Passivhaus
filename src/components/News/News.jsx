import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import './News.scss';

export function News({ singleNews, className, imgSrc, alt }) {
    const {
        frontmatter: { title, content, thumb, slug },
    } = singleNews;

    return (
        <div className={`single-news ${className}`}>
            <span className="single-news__title">
                {title} <p>{content}</p>
            </span>
            <GatsbyImage image={getImage(thumb)} alt={slug} className="single-news__image"  />
        </div>
    );
}
