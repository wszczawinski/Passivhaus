export const truncateHtmlContent = (inputString: string, maxLength: number): string => {
    if (!inputString || inputString.length <= maxLength) {
        return inputString || '';
    }

    let truncateAt = maxLength;
    while (truncateAt > 0 && inputString[truncateAt] !== '>') {
        truncateAt--;
    }

    if (truncateAt === 0) truncateAt = maxLength;

    let truncated = inputString.substring(0, truncateAt + 1);

    const openTags: string[] = [];
    const tagRegex = /<(\/?[a-zA-Z][a-zA-Z0-9]*)[^>]*>/g;
    let match;

    while ((match = tagRegex.exec(truncated)) !== null) {
        const tagName = match[1].toLowerCase();

        if (tagName.startsWith('/')) {
            const openTag = tagName.substring(1);
            const index = openTags.lastIndexOf(openTag);
            if (index !== -1) openTags.splice(index, 1);
        } else if (!match[0].endsWith('/>')) {
            openTags.push(tagName);
        }
    }

    for (let i = openTags.length - 1; i >= 0; i--) {
        truncated += `</${openTags[i]}>`;
    }

    return truncated;
};
