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
