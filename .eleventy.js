module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static')
    eleventyConfig.addPassthroughCopy('admin')
    // eleventyConfig.addJavaScriptFunction('formatDate', (str) => {
    //     const d = new Date(str)
    //     return `${d.getMonth()} ${d.getDate()}, ${d.getFullYear()}}`
    // })
    return {
        passthroughFileCopy: true
    }
}