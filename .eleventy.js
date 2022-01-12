const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    // Copy all static assets
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/admin");

    // Filter date format
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });

    // Change directories
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}