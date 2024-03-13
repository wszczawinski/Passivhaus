import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import './News.scss';

export function News({ singleNews }) {
    const {
        frontmatter: { title, content, thumb, slug, date },
        html,
    } = singleNews;

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

    const isNewsTooLong = slug === 'cepht-news';
    const isNewsClickable = slug === 'news-after-case-study';

    const handleClick = goToUrl => {
        if (isNewsTooLong || isNewsClickable) {
            const url = goToUrl || 'https://pibp.pl/blog/cepht-news';
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    };

    const dateToFormat = new Date(date);

    const day = dateToFormat.getUTCDate().toString().padStart(2, '0');
    const month = (dateToFormat.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = dateToFormat.getUTCFullYear();

    const formattedDate = `${day}.${month}.${year} r.`;

    return (
        <section className="single-news">
            <div className="single-news__text-content">
                <div className="single-news__title">{title}</div>
                {year >= 2023 && <div className="single-news__date">{formattedDate}</div>}
                <p>{content}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: truncateString(html, isNewsTooLong ? 1100 : 2650),
                    }}
                />
                {isNewsTooLong && (
                    <button className="single-news__more" onClick={() => handleClick()}>
                        <strong>
                            <i>czytaj dalej</i>
                        </strong>
                    </button>
                )}
            </div>

            <div
                className="single-news__image"
                onClick={() =>
                    handleClick(
                        isNewsClickable
                            ? 'https://szkolenia.akademiazdrowegobudownictwa.pl/certyfikowany-projektant-budynkow-pasywnych/?utm_source=pibp_www&utm_medium=r1m&utm_campaign=cephd1'
                            : 'https://szkolenia.akademiazdrowegobudownictwa.pl/certyfikowany-projektant-budynkow-pasywnych/?utm_source=pibp&amp;utm_medium=www&amp;utm_campaign=cephd2',
                    )
                }
            >
                <GatsbyImage image={getImage(thumb)} alt={slug} />
            </div>
        </section>
    );
}
