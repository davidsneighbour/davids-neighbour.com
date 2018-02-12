/*global module:false*/

'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var path = require('path');

    var config = {

        pkg: grunt.file.readJSON('package.json'),
        env: process.env,

        headercss: [
          "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>-",
          "<%= grunt.template.today('yyyy-mm-dd') %> */"
        ].join(''),

        bower: "./bower_components",
        temp: "./tmp",
        cssversionfile: "./tmp/versioncss",
        jsversionfile: "./tmp/versionjs",
        fontsversionfile: "./tmp/versionfonts",
        jsfiles: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/popper.js/dist/umd/popper.js",
          "node_modules/bootstrap/dist/js/bootstrap.js",
          "src/js/fontawesome/fontawesome-all.min.js"
        ],
        cleanfiles: [
          "<%= setup.bower %>",
          "./node_modules",
          "./sass-cache"
        ]

    };

    config = grunt.util._.extend(config, require('load-grunt-config')(grunt, {

        configPath: path.join(__dirname, './grunt/options'),
        loadGruntTasks: false,
        init: false

    }));
    
    grunt.initConfig(config);

    // subtask to write version files
    grunt.registerMultiTask('writefile', 'write files.', function () {

        grunt.file.write(this.data.dst, this.data.content);
        grunt.log.writeln('written "' + this.target + '"');

    });

    // Default Task
    grunt.registerTask('default', [

        // preparing clean
        'clean:preparation',

        // doing stuff once at work flow start
        'create-versionfiles',

        // bump version
        'bump',
        'replace',

        // processing the dynamic parts once
        'process-javascripts',

        'exec:compileSass',
        'clean:staticcss',
        'copy:stylesheet'
        //,  'exec:gitprocesschanges'

    ]);

    // Default Task
    grunt.registerTask('process-javascripts', [

        'clean:staticjs',
        //'modernizr',
        'concat:javascripts',
        'uglify:javascript',
        'copy:script'

    ]);

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
