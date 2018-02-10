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
        setup: grunt.file.readJSON('grunt/meta-setup.json')

    };

    config = grunt.util._.extend(config, require('load-grunt-config')(grunt, {

        configPath: path.join(__dirname, './grunt/options'),
        loadGruntTasks: false,
        init: false

    }));

    grunt.loadTasks('grunt/tasks');
    grunt.initConfig(config);

    grunt.config.set('headercss', config.setup.wpblock.join(''));

};
