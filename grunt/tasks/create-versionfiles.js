module.exports = function(grunt) {

    'use strict';

    // creating version files for all css, js, font processes
    grunt.registerTask('create-versionfiles', [

        'writefile:versioncssfile',
        //'writefile:versionfilecss',

        'writefile:versionjsfile',
        //'writefile:versionfilejs',

        //'writefile:emptystyle',
        'writefile:tmpheader'

    ]);

};
