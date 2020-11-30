// how to lint a mixed codebase (TL;DR - lint the JS files by default, then use overrides for TS files): https://stackoverflow.com/a/59842806/11767294
module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  env: {
    es6: true,
    node: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["**/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json"],
      },
      plugins: ["@typescript-eslint"],
    },
  ],
};
