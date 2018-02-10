/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    javascript: {
        files: {
            '<%= setup.temp %>/script.min.js': ['<%= setup.temp %>/script.js']
        }
    }
};
