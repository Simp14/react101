var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '__build');
var COMPONENTS_DIR = path.resolve(__dirname, 'src/components/**/*.js');
var homePageDirectory = path.resolve(__dirname, 'src/pages/home/home.js');

var config = {
  entry: homePageDirectory ,
  output: {
    path: BUILD_DIR,
    filename: 'home.bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = config