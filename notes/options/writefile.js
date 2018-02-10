/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {

    // @usedin process-stylesheets
    tmpheader: {
        dst: '<%= temp %>/styleheader.css',
        content: '<%= headercss %>'
    },

    // @usedin create-versionfiles
    versioncssfile: {
        dst: '<%= cssversionfile %>',
        content: '<%= grunt.template.today("yyyymmddhhss") %>'
    },
    
    // @usedin create-versionfiles
    versionjsfile: {
        dst: '<%= jsversionfile %>',
        content: '<%= grunt.template.today("yyyymmddhhss") %>'
    }

};
