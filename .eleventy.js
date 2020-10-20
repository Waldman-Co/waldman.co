module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addPassthroughCopy('admin');
    const ejs = require('ejs');
    eleventyConfig.setLibrary('ejs',ejs);
    // eleventyConfig.addJavaScriptFunction('formatDate', (str) => {
    //     const d = new Date(str)
    //     return `${d.getMonth()} ${d.getDate()}, ${d.getFullYear()}}`
    // })
    return {
        passthroughFileCopy: true,
        dataTemplateEngine: "ejs",
        markdownTemplateEngine: "ejs",
        htmlTemplateEngine: "ejs",
        templateFormats: ["md", "html", "png", "jpg", "jpeg", "gif", "svg"],
    };
    
};

