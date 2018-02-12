/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
	options: {
		cdata: true
	},
	dist: {
		files: [{
			expand: true,
			cwd: 'public',
			src: ['**/*.html', '*.html'],
			dest: 'public'
		}]
	}
};
