import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';

import './Blog.scss';

import { formatDate, getDayMonthYear } from '../../helpers/formatDate';
import { truncateHtmlContent } from '../../helpers/truncateHtmlContent';

export const BlogPost = ({ singleNews }) => {
    const { title, content, featuredImage, slug, date, links } = singleNews;

    const { year } = getDayMonthYear(date);
    const formatedDate = formatDate(date);

    return (
        <section className="single-news">
            <div className="single-news__text-content">
                <div className="single-news__title">{title}</div>
                {year >= 2023 && <div className="single-news__date">{formatedDate}</div>}
                <div
                    dangerouslySetInnerHTML={{
                        __html: truncateHtmlContent(content, 1000),
                    }}
                />

                <div className="single-news__more">
                    <Link to={`/blog/${date}/${slug}`}>
                        <strong>
                            <i>czytaj dalej</i>
                        </strong>
                    </Link>
                </div>
            </div>
            {links?.youtubeLink ? (
                <iframe
                    src={links.youtubeLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            ) : (
                <a
                    className={`single-news__image ${!links?.imageLink && 'single-news__noLink'}`}
                    target="_blank"
                    href={links?.imageLink}
                    without
                    rel="noreferrer"
                    aria-label="blog link"
                >
                    <GatsbyImage image={getImage(featuredImage?.node)} alt={slug} />
                </a>
            )}
        </section>
    );
};
