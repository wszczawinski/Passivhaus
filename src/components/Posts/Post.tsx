import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';

import './Post.scss';

import { formatDate, getDayMonthYear } from '../../helpers/formatDate';
import { truncateHtmlContent } from '../../helpers/truncateHtmlContent';

export const Post = ({ singleNews }: { singleNews: Queries.HomeQuery['newsWP']['nodes'][0] }) => {
    const {
        title,
        content,
        featuredImage,
        slug,
        date,
        links,
        categories: { nodes: categoriesNodes },
    } = singleNews;

    const formatedDate = formatDate(date);
    const { year } = getDayMonthYear(date);

    const categories = categoriesNodes?.map(node => node.name);

    const getPostPath = () => {
        if (categories.includes('blog')) {
            return `/blog/${date}/${slug}`;
        }
        if (categories.includes('news')) {
            return `/news/${date}/${slug}`;
        }
        // MD posts
        return `/news/${slug}`;
    };

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
                {content?.length >= 1000 ? (
                    <div className="single-news__more">
                        <Link to={getPostPath()}>
                            <strong>
                                <i>czytaj dalej</i>
                            </strong>
                        </Link>
                    </div>
                ) : null}
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
                    rel="noreferrer"
                    aria-label="blog link"
                >
                    <GatsbyImage image={getImage(featuredImage?.node)} alt={slug} />
                </a>
            )}
            <hr />
        </section>
    );
};
