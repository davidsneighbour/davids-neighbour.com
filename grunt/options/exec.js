/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    options: {
        stdout: false
    },
    gitprocesschanges: [
      // "git add static/assets/js ",
      // "git add static/assets/css ",
      // "git add package.json ",
      // "git add config.toml ",
      // "git commit -m 'build: build system v<%= pkg.version %>' "
    ].join(' && '),
    stylefmt: {
        command: 'stylefmt -R <%= assets %>/theme/'
    },
    compileSass: 'npm run-script css'
};
