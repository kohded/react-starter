module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    jest: true,
    node: true,
    serviceworker: true,
    'shared-node-browser': true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:compat/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  ignorePatterns: ['build'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.dev.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {}, // Prevents import/no-extraneous-dependencies for Node api.
      webpack: { config: 'webpack.config.babel.js' },
    },
  },
};
