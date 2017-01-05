import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = [
  {
    name: 'html',
    entry: {
      html: path.join(__dirname, 'src', 'index.html'),
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'index.html',
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: ExtractTextPlugin.extract('raw'),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('index.html'),
    ],
  },
  {
    name: 'js',
    entry: {
      bundle: path.join(__dirname, 'src', 'js', 'index.js'),
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  {
    name: 'style',
    entry: path.join(__dirname, 'src', 'sass', 'style.sass'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'style.css',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('css?minimize!sass'),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
    ],
  },
]
