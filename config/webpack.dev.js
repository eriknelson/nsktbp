const webpack = require('webpack');
const path = require('path');

const projRoot = path.join(__dirname, '..');
const srcDir = path.join(projRoot, 'src');
const buildDir = path.join(projRoot, 'build');

const wpConfig= {
  debug: true,
  devtool: 'sourcemap',
  entry: [
    'webpack-hot-middleware/client',
    path.join(srcDir, 'main')
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts'],
        include: srcDir
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: buildDir,
    // http://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do
    // WP needs to know where the generated bundle will be hosted so it can request
    // bhucnks or references files loaded with certain loaders.
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: srcDir,
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};

module.exports = wpConfig;
