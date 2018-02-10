
/**
 * configuration for postcss - autoprefixing css stylesheets
 * 
 * @example <pre>grunt postcss</pre>
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 * @see https://github.com/nDmitry/grunt-postcss
 */

module.exports = {

    options: {
        map: true,
        diff: true,
        failOnError: false,
        processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({
                browsers: [
                    '> 1%',
                    'last 2 version',
                    'Firefox ESR',
                    'Opera 12.1',
                    'Explorer 8',
                    'Explorer 9',
                    'BlackBerry 10',
                    'Android 4'
                ]
            }), // add vendor prefixes
            require('cssnano')() // minify the result
        ]
    },
    dist: {
        src: '<%= setup.temp %>/*.css'
    }
};
