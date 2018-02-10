/**
 * some custom tasks used in dextrophilia
 */
module.exports = function (grunt) {

    'use strict';

    /**
     * synchronizing the database based on the selection in prompt:(un)staging
     */
    grunt.registerTask('remoteDB2local', 'Synchronizing remote database to local.', function () {

        var syncdb = grunt.config('syncdb');
        if (syncdb === true) {
            grunt.log.writeln('synchronizing database');
            grunt.task.run('exec:remote2local');
        } else {
            grunt.log.writeln('not synchronizing database');
            grunt.task.run('attention:noDatabaseSynchronization');
        }
    });

    /**
     * synchronizing the database based on the selection in prompt:(un)staging
     */
    grunt.registerTask('localDB2remote', 'Synchronizing local database to remote.', function () {

        var syncdb = grunt.config('syncdb');
        if (syncdb === true) {
            grunt.log.writeln('synchronizing database');
            grunt.task.run('exec:local2remote');
        } else {
            grunt.log.writeln('not synchronizing database');
            grunt.task.run('attention:noDatabaseSynchronization');
        }
    });

    grunt.registerMultiTask('writefile', 'write files.', function () {

        grunt.file.write(this.data.dst, this.data.content);
        grunt.log.writeln('written "' + this.target + '"');

    });

};
