import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';

import './News.scss';
import { formatDate, getDayMonthYear } from '../../helpers/formatDate';

export function News({ singleNews }) {
    const {
        frontmatter: { title, content, thumb, slug, date, ytVideoSrc, imageLink },
        html,
    } = singleNews;

    const { year } = getDayMonthYear(date);
    const formatedDate = formatDate(date);

    const truncateString = (inputString, maxLength) => {
        if (inputString.length <= maxLength) {
            return inputString;
        } else {
            let truncated = inputString.substr(0, maxLength - 3) + '...';
            const lastOpenTagIndex = truncated.lastIndexOf('<');
            const lastCloseTagIndex = truncated.lastIndexOf('>');
            if (lastOpenTagIndex > lastCloseTagIndex) {
                const tagNameStartIndex = lastOpenTagIndex + 1;
                const tagNameEndIndex = truncated.indexOf(' ', tagNameStartIndex);
                const tagName = truncated.substring(tagNameStartIndex, tagNameEndIndex);
                truncated += `</${tagName}>`;
            }
            return truncated;
        }
    };

    return (
        <section className="single-news">
            <div className="single-news__text-content">
                <div className="single-news__title">{title}</div>
                {year >= 2023 && <div className="single-news__date">{formatedDate}</div>}
                <p>{content}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: truncateString(html, 1000),
                    }}
                />
                {html.length >= 1000 ? (
                    <div className="single-news__more">
                        <Link to={`blog/${slug}`}>
                            <strong>
                                <i>czytaj dalej</i>
                            </strong>
                        </Link>
                    </div>
                ) : null}
            </div>

            {!!ytVideoSrc ? (
                <iframe
                    src={ytVideoSrc}
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
}
