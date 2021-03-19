module.exports = {
  extends: [
    'stylelint-config-standard',
    // Installs: stylelint-order, stylelint-scss
    'stylelint-config-sass-guidelines',
    'stylelint-a11y/recommended',
    // https://github.com/prettier/stylelint-prettier#user-content-recommended-configuration
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: ['build/**'],
  plugins: [
    'stylelint-high-performance-animation',
    'stylelint-declaration-strict-value',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'plugin/no-low-performance-animation-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'scale-unlimited/declaration-strict-value': [['color']],
    'selector-max-id': 1,
  },
};
