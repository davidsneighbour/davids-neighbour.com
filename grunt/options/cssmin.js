/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    combine: {
        options: {
            report: 'gzip'

        },
        files: {
            'tmp/theme.min.css': [
                "tmp/theme.css"
            ]

        }

    }

};
