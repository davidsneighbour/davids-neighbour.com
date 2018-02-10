/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    theme: {
        files: {
            src: [
                'src/js/*.js'
            ]
        }
    },
    system: {
        files: {
            src: [
                'Gruntfile.js'
            ]
        }
    },
    options: {
        node: true,
        browser: true,
        esnext: true,
        bitwise: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: 'single',
        regexp: true,
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        smarttabs: true,
        globals: {
            jQuery: true,
            WebFont: true
        }
    }
};
