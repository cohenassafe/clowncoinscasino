module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  globals: {
    gtag: 'readonly',
    ga: 'readonly'
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'warn'
  },
  env: {
    browser: true,
    node: true
  }
};
