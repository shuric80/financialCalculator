const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const BUILD_DIR = path.resolve(__dirname, 'dist/');
const isDevelopment = true;
module.exports = {
  mode:'development',
  entry: './index.js',
  module: {
    rules: [
      {
              test: /\.module\.s(a|c)ss$/,
            loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
                options: {
                modules: true,
                    sourceMap: isDevelopment
              }
          },
          {
            loader: 'sass-loader',
                options: {
                sourceMap: isDevelopment
              }
          }
        ]
      },
      {
        test: /\.(js$|jsx)/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };
