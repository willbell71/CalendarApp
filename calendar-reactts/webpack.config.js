/* eslint-disable */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'ts-loader'
      }]
    }, {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                () => require('autoprefixer')({ grid: true })
              ]
            }
          }
        },
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: 'assets'
      }]
    })
  ]
};
