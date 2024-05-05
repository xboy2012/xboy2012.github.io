module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': 'error',
  },
};
