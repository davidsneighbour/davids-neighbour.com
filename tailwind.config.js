const typography = require("@tailwindcss/typography");

module.exports = {
  // See https://tailwindcss.com/docs/configuration#important
  important: false,
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./hugo_stats.json", "./layouts/**/*.html"],
    extractors: [
      {
        extractor: (content) => {
          // noinspection JSUnresolvedVariable
          const els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ["json"],
      },
    ],
    // in case of missing styles read this part of the documentation
    // https://tailwindcss.com/docs/optimizing-for-production#removing-all-unused-styles
    mode: "all",
    preserveHtmlElements: false,
    safelist: ["text-center"],
    // https://purgecss.com/configuration#options
    options: {
      // https://tailwindcss.com/docs/optimizing-for-production#removing-unused-keyframes
      keyframes: true,
      fontFace: true,
      variables: true,
      rejected: false,
    },
  },
  // https://tailwindcss.com/docs/dark-mode
  darkMode: false,
  plugins: [typography],
  theme: {
    extend: {},
  },
  // https://tailwindcss.com/docs/hover-focus-and-other-states#default-variants-reference
  variants: {
    extend: {},
  },
};
