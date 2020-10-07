module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addPassthroughCopy('admin');
    return {
        passthroughFileCopy: true,
        dataTemplateEngine: "ejs",
        markdownTemplateEngine: "ejs",
        htmlTemplateEngine: "ejs",
        templateFormats: ["md", "html", "png", "jpg", "jpeg", "gif", "svg"],
    };
    
};