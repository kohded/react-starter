module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'eslint', // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
  ],
  '*.{css,less,scss}': 'stylelint',
  '*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yml}': 'prettier -c --debug-check',
};
