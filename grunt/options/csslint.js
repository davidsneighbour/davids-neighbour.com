/**
 * @version 1.0.0
 * @author Patrick Kollitsch <patrick@davids-neighbour.com>
 * @access public
 */
module.exports = {
    strict: {
        options: {
            // https://github.com/stubbornella/csslint/wiki/Rules

            'import': false,
            'important': false,
            'adjoining-classes': false,
            'known-properties': false,
            'box-sizing': false,
            'box-model': false,
            'overqualified-elements': false,
            'display-property-grouping': false,
            'bulletproof-font-face': false,
            'compatible-vendor-prefixes': false,
            'regex-selectors': false,
            'errors': false,
            'duplicate-background-images': false,
            'duplicate-properties': false,
            'empty-rules': false,
            'selector-max-approaching': false,
            'gradients': false,
            'fallback-colors': false,
            'font-sizes': false,
            'font-faces': false,
            'floats': false,
            'star-property-hack': false,
            'outline-none': false,
            'ids': false,
            'underscore-property-hack': false,
            'rules-count': false,
            'qualified-headings': false,
            'selector-max': false,
            'shorthand': false,
            'text-indent': false,
            'unique-headings': false,
            'universal-selector': false,
            'unqualified-attributes': false,
            'vendor-prefix': false,
            'zero-units': false

        },
        src: ['<%= setup.temp %>/theme.css']

    }

};