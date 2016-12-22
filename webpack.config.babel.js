import path from 'path'

module.exports = [
  {
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
]
