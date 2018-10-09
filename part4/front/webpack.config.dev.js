const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin
} = require('webpack');

const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
  ],
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist'], {
      watch: true,
    }),
  ],
});
