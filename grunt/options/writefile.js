/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    // @usedin create-versionfiles
    // versionfilejs: {
    //     dst: '<%= setup.theme %>/lib/versionjs.php',
    //     content: '<?php \n' +
    //             'define(\'VERSIONJS\', \'<%= grunt.file.read(setup.jsversionfile) %>\'); \n' +
    //             '\n'
    // },
    // @usedin create-versionfiles
    // versionfilecss: {
    //     dst: '<%= setup.theme %>/lib/versioncss.php',
    //     content: '<?php \n' +
    //             'define(\'VERSIONCSS\', \'<%= grunt.file.read(setup.cssversionfile) %>\'); \n' +
    //             '\n'
    // },
    // @usedin process-stylesheets
    // emptystyle: {
    //     dst: '<%= setup.theme %>/style.css',
    //     content: '<%= headercss %>'
    // },
    // @usedin process-stylesheets
    tmpheader: {
        dst: '<%= setup.temp %>/styleheader.css',
        content: '<%= headercss %>'
    },
    // @usedin create-versionfiles
    versioncssfile: {
        dst: '<%= setup.cssversionfile %>',
        content: '<%= grunt.template.today("yyyymmddhhss") %>'
    },
    // @usedin create-versionfiles
    versionjsfile: {
        dst: '<%= setup.jsversionfile %>',
        content: '<%= grunt.template.today("yyyymmddhhss") %>'
    }

};
