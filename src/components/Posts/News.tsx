import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';

import { formatDate, getDayMonthYear } from '@/helpers/formatDate';
import { truncateHtmlContent } from '@/helpers/truncateHtmlContent';

import './News.scss';

export const NewsPost = ({ singleNews }) => {
    const {
        frontmatter: { title, content, thumb, slug, date, youtubeLink, imageLink },
        html,
    } = singleNews;

    const { year } = getDayMonthYear(date);
    const formatedDate = formatDate(date);

    return (
        <section className="single-news">
            <div className="single-news__text-content">
                <div className="single-news__title">{title}</div>
                {year >= 2023 && <div className="single-news__date">{formatedDate}</div>}
                <p>{content}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: truncateHtmlContent(html, 1000),
                    }}
                />
                {html.length >= 1000 ? (
                    <div className="single-news__more">
                        <Link to={`news/${slug}`}>
                            <strong>
                                <i>czytaj dalej</i>
                            </strong>
                        </Link>
                    </div>
                ) : null}
            </div>

            {youtubeLink ? (
                <iframe
                    src={youtubeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            ) : (
                <a
                    className={`single-news__image ${!imageLink && 'single-news__noLink'}`}
                    target="_blank"
                    href={imageLink}
                    without
                    rel="noreferrer"
                    aria-label="blog link"
                >
                    <GatsbyImage image={getImage(thumb)} alt={slug} />
                </a>
            )}
        </section>
    );
};
