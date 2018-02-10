/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 * @documentation https://github.com/gruntjs/grunt-contrib-imagemin
 */
module.exports = {

    assets: {
        files: [{
                expand: true,
                cwd: './static/',
                src: ['**/*.{png,jpg,gif}'],
                dest: './static/'
            }],
        options: {
            optimizationLevel: 7
        }
    }
};
