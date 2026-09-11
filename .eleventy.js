module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/logo.svg": "logo.svg" });
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
