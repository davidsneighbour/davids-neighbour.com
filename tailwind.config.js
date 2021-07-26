// https://github.com/tailwindlabs/tailwindcss-forms
const forms = require("@tailwindcss/forms");
const colors = require("tailwindcss/colors");
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
  // See https://tailwindcss.com/docs/configuration#important
  important: false,
  // prefix: "dnb-",
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
  darkMode: false, // or 'media' or 'class'
  plugins: [forms, aspectRatio],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    // https://tailwindcss.com/docs/customizing-colors
    colors: {
      primary: colors.cyan,
      secondary: colors.amber,

      neutral: colors.coolGray,
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,

      gray: colors.coolGray,

      blue: colors.cyan,
      red: colors.rose,
      green: colors.lime,
      pink: colors.pink,
      yellow: colors.amber,
    },
    // https://tailwindcss.com/docs/breakpoints
    screens: {
      print: { raw: "print" },
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      body: ["verb"],
      sans: ["verb"],
    },
    fontWeight: {
      normal: 200,
      bold: 700,
      black: 900,
    },
    // https://tailwindcss.com/docs/hover-focus-and-other-states#default-variants-reference
    variants: {},
  },
};
