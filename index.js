module.exports = {
  env: {
    browser: true,
    es2020: true,
    mocha: true,
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
};
