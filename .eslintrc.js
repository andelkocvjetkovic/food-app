module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:prettier-vue/recommended",
    "plugin:vue/recommended",
    "prettier/vue",
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "prettier-vue/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "no-var": 0,
    eqeqeq: "off",
    "no-console":
      process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger":
      process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
