module.exports = function (grunt) {

    'use strict';

    // Default Task
    grunt.registerTask('process-style-theme', [
        'exec:compileSass'
    ]);

    grunt.registerTask('process-style-build', [
        'postcss',
        'cssmin'
    ]);

    grunt.registerTask('process-stylesheets', [

        'clean:stylesheets',
        'process-style-theme',
        'process-style-build'

    ]);



};
