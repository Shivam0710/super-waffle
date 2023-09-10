export function modifyBlogContent(blogContent: string) {
    const inputString = blogContent;

    // Regular expression to match the content within ####YoutubeVideo=...####
    const regex = /####YoutubeVideo=(.*?)####/g;  // Added 'g' flag for global replacement

    // Replace all occurrences of the matched content with the replacement iframe
    const finalContent = inputString.replace(regex, (match, youtubeURL) => {
        const replacement = `<iframe src="${youtubeURL}"></iframe>`;
        return replacement;
    });

    if (finalContent !== inputString) {
        // Content was modified, update blogContent
        blogContent = finalContent;
    } else {
        console.log("No matching content found.");
    }

    return blogContent;
}