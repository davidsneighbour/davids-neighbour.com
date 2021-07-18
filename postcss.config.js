module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano:{
            preset: 'default',
        }
        // purgecss: {
        //     content: [
        //       './hugo_stats.json'
        //     ],
        //     defaultExtractor: function(content){
        //         let els = JSON.parse(content).htmlElements;
        //         return els.tags.concat(els.classes, els.ids);
        //     }
        // }
        //...(process.env.HUGO_ENVIRONMENT === 'production' ? [ purgecss ] : [])
    }
}
let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

module.exports = {
  // eslint-disable-next-line no-process-env
  plugins: [
    tailwind,
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ autoprefixer ] : [])
  ]
};
