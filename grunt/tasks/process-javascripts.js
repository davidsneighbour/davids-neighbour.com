module.exports = function (grunt) {

    'use strict';

    // Default Task
    grunt.registerTask('process-javascripts', [

        //'clean:javascripts',
        //'modernizr',
        'concat:javascripts',
        'uglify:javascript',
        'copy:script'

    ]);

};
