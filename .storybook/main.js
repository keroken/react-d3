const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-knobs',
    '@storybook/addon-actions', 
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async config => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.resolve.alias['helpers'] = path.resolve(__dirname, '../src/helpers');
    return config;
  },
}