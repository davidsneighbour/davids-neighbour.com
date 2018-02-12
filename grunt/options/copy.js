/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
  script: {
    files: [{
      src: [
        '<%= temp %>/script.min.js'
      ],
      dest: 'static/js/script-<%= pkg.version %>.js'
    }]
  },
  stylesheet: {
    files: [{
      src: [
        '<%= temp %>/theme.css'
      ],
      dest: 'static/css/theme-<%= pkg.version %>.css'
    }]
  }

};
