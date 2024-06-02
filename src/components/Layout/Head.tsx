import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export interface MetaTags {
    title?: string;
    pathName?: string;
    description?: string;
}
export const Head = ({ title, description, pathName }: MetaTags) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                    siteUrl
                }
            }
        }
    `);

    const { title: defaultTitle, description: defaultDescription, keywords: defaultKeywords, siteUrl } = site.siteMetadata;

    const metaTags = [
        {
            name: 'description',
            content: description ? description : defaultDescription,
        },
        {
            name: 'keywords',
            content: defaultKeywords,
        },
        {
            property: 'og:title',
            content: title ? title : defaultTitle,
        },
        {
            property: 'og:description',
            content: description ? description : defaultDescription,
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
    ];

    const metaLinks = pathName ? [{ rel: 'canonical', href: `${siteUrl}${pathName}` }] : [];

    return <Helmet title={title ? title : defaultTitle} meta={metaTags} htmlAttributes={{ lang: 'pl' }} link={metaLinks} charSet={'utf-8'} />;
};
