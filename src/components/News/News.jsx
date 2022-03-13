import React from 'react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import './News.scss';

export function News({ singleNews }) {
    const { frontmatter: { date, slug, thumb, title }, id } = singleNews
    const displayDate = new Date(date).toISOString().split('T')[0]
    return (
        <Link to={'/blog/' + slug} key={id} className="single-news">
            <p>Dodano: {displayDate}</p>
            <div className='single-news__img'>
            <GatsbyImage
                image={getImage(thumb)}
                alt={slug}
            />
            <span className='single-news__title'>{title}</span>
            </div>
            
        </Link>
    );
}
