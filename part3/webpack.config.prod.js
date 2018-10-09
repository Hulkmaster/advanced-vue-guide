const CleanWebpackPlugin = require('clean-webpack-plugin');

const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
});
