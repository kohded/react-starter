module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['build/**'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else', 'import'],
      },
    ],
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['else', 'if'],
      },
    ],
    'order/properties-alphabetical-order': true,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
