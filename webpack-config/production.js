const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

const SOURCE_DIR = path.resolve(__dirname, '../src')
const DIST_DIR = path.resolve(__dirname, '../www')

module.exports = [
  {
    entry: path.join(SOURCE_DIR, 'index.jsx'),
    output: {
      path: path.join(DIST_DIR, 'js'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  {
    entry: {
      style: path.join(SOURCE_DIR, 'styles', 'index.sass')
    },
    output: {
      path: path.join(DIST_DIR, 'css'),
      filename: 'bundle.css'
    },
    module: {
      rules: [
        {
          test: /\.sass$|\.scss$/,
          exclude: /node_modules/,
          use: extractTextPlugin.extract({
            use: [
              'css-loader',
              'sass-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new extractTextPlugin('bundle.css')
    ],
    resolve: {
      extensions: ['.sass', '.scss']
    }
  }
]

