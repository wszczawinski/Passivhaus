type markdownNews = Queries.HomeQuery['newsMd']['nodes'][0];
type wpNews = Queries.HomeQuery['newsWP']['nodes'][0];
export const mapNewsToWPNews = (markdownNews: markdownNews): wpNews => {
    const {
        frontmatter: { content, date, thumb, title, slug, imageLink },
        html,
        id,
    } = markdownNews;

    return {
        id,
        date,
        slug,
        title,
        content: content || html,
        links: { imageLink, youtubeLink: null },
        featuredImage: { node: { gatsbyImage: thumb?.childImageSharp?.gatsbyImageData } },
        categories: { nodes: [{ name: '' }] },
    };
};
