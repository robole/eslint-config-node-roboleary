module.exports = {
  env: {
    browser: false,
    node: true,
    es2020: true,
    mocha: true,
    jest: true,
  },
  extends: [
    "eslint-config-roboleary-base",
    "plugin:node/recommended",
    "prettier", // makes sure this is last in the list
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["**/node_modules/*", "**/dist/*", "**/out/*"],
  rules: {
    "node/exports-style": ["error", "module.exports"],
  },
};
