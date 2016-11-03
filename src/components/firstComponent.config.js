//Webpack stuff
module.exports = {
  //Main component file.
  entry : './firstComponent.js',
  //Where the final bundle will go.
  output : {
    path: '../../__build/components',
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