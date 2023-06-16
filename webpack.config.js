const path = require('path');
const env = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const BuildConfig = {
  mode: 'development',
  // isDev,
  port: env.PORT || 3000,
  path: {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  },
};

module.exports = {
  mode: BuildConfig.mode,
  entry: ['@babel/polyfill', BuildConfig.path.entry],
  devtool: 'inline-source-map',
  output: {
    path: BuildConfig.path.dist,
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  plugins: [new HTMLWebpackPlugin({ template: BuildConfig.path.html }), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png)/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   presets: ['@babel/preset-typescript'],
          // },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          // options: {
          //   presets: ['@babel/preset-typescript'],
          // },
        },
      },
    ],
  },
};
