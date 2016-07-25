var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }]
  }
};
