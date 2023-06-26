const path = require('path');
const env = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const BuildConfig = {
  path: {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  },
};

const getRules = () => {
  return [
    {
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: ['file-loader'],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ];
};

const getPlugins = () => {
  return [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: BuildConfig.path.html,
    }),
  ];
};

module.exports = {
  entry: BuildConfig.path.entry,
  devtool: 'inline-source-map',
  output: {
    path: BuildConfig.path.dist,
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  plugins: getPlugins(),
  module: {
    rules: getRules(),
  },
};
