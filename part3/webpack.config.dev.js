const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin
} = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './src/main.js'
  ],
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist'], {
      watch: true,
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.html',
    }),
    new VueLoaderPlugin(),
  ],
};
