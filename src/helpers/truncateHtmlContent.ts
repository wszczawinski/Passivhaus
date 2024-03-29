export const truncateHtmlContent = (inputString: string, maxLength: number): string => {
    if (inputString?.length <= maxLength) {
        return inputString;
    } else {
        let truncated = inputString?.substr(0, maxLength - 3) + '...';
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
