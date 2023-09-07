const postCssNesting = require("postcss-nesting");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [postCssNesting(), postcssPresetEnv({ stage: 1 })],
};
