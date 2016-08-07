'use strict'

let path = require('path');
let webpack = require('webpack');

function join(dest) { return path.resolve(__dirname, dest); }
function web(dest) { return join('web/static/' + dest); }

let config = module.exports = {
  entry: {
    application: [
      web('js/application.js'),
    ],
  },

  output: {
    path: join('priv/static'),
    filename: 'js/application.js',
  },

  resolve: {
    extesions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    noParse: /vendor\/phoenix/,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-2', 'stage-0'],
        },
      }
    ]
  },

  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );
}
