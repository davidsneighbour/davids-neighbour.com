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
        '<%= setup.temp %>'
    ],
    // cleanup of created stylesheets
    // @usedin process-stylesheets
    static: [
        'static/css/*.css',
        'static/js/*.js'
    ],
    // cleanup of created javascripts
    // @usedin process-javascripts
    javascripts: [
        '<%= setup.theme %>/script*.js'
    ],

    // complete cleanup of all non-repository files
    // @usedin only per direct call
    global: [
        '<%= setup.cleanfiles %>'
    ]

};
