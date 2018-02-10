module.exports = function (grunt) {

    'use strict';

    // cleaning installed theme files and cache
    // and copying current theme version over to app
    grunt.registerTask('copy-theme', [

        'clean:theme',
        'clean:debug',
        'copy:theme'

    ]);

};
