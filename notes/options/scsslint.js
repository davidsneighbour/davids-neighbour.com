/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
// deleting stuff
// https://github.com/ahmednuaman/grunt-scss-lint
// https://github.com/brigade/scss-lint/
module.exports = {
    allFiles: [
        'test/fixtures/*.scss'
    ],
    options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
    }
};