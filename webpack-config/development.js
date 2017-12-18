const path = require('path')

const SOURCE_DIR = path.resolve(__dirname, '../src')
const DIST_DIR = path.resolve(__dirname, '../www')

module.exports = [
  {
    entry: path.resolve(SOURCE_DIR, 'index.jsx'),
    output: {
      path: DIST_DIR,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.sass$/,
          exclude: /node_modules/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader?indentedSyntax'}
          ]
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [],
    devServer: {
      contentBase: DIST_DIR,
      hot: true,
      open: true,
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
      stats: {
        colors: true
      }
    }
  }
]

