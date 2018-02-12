/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
// deleting stuff
module.exports = {
    // initial cleanup of assets
    // @usedin default
    preparation: [
        '<%= temp %>'
    ],
    // cleanup of created stylesheets
    // @usedin process-stylesheets
    staticjs: [
        'static/js/*.js'
    ],

    staticcss: [
        'static/css/*.css'
    ]

};
