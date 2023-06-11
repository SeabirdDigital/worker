/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: false,
  useTabs: true,
  tabWidth: 4,
};

module.exports = config;
