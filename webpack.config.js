var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/index',
  output: {
    path: __dirname,
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.ProvidePlugin({
      'ReactDOM': 'react-dom'
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
};
