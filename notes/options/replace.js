// replace version with current version number
module.exports = {
    options: {
        patterns: [
            {
                match: /[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}/,
                replacement: '<%= pkg.version %>'
            }
        ]
    },
    version: {
        files: [
            {
                src: [
                    'config.toml'
                ],
                dest: './',
                overwrite: true
            }
        ]
    }
};
