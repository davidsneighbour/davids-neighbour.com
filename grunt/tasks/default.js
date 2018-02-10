module.exports = function (grunt) {

    'use strict';

    // Default Task
    grunt.registerTask('default', [

        // preparing clean
        'clean:preparation',
        'clean:static',

        // doing stuff once at work flow start
        'create-versionfiles',

        // bump version
        'bump',
        'replace',

        // processing the dynamic parts once
        'process-javascripts',

        'exec:compileSass',
        'cssmin',
        'copy:stylesheet'
        //,  'exec:gitprocesschanges'

    ]);

};
