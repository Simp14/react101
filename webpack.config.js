var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '__build');
var APP_DIR = path.resolve(__dirname, 'src/components');

var config = {
  entry: APP_DIR + '/firstComponent.js',
  output: {
    path: BUILD_DIR,
    filename: 'firstComponent.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = config;
