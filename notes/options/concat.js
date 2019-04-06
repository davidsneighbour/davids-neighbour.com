/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    options: {
        separator: ';',
        stripBanners: true
    },
    javascripts: {
        nonull: true,
        src: '<%= jsfiles %>',
        dest: '<%= temp %>/script.js'
    }
};