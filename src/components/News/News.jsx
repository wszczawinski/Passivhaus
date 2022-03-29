import React from 'react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import './News.scss';

export function News({ singleNews }) {
    const {
        frontmatter: { slug, thumb, title, content },
        id,
    } = singleNews;
    return (
        <div className="single-news">
            <Link to={'/blog/' + slug} key={id}>
                <div className="single-news__img">
                    <GatsbyImage image={getImage(thumb)} alt={slug} />
                </div>
            </Link>
            <span className="single-news__title">
                {title} <p>{content}</p>
            </span>
        </div>
    );
}
