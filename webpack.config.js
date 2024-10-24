const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true, 
  },
  module: {
    rules: [
      
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'News',
      template: path.resolve(__dirname, './src/pages/news.html'),
      filename: 'news.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Photo',
      template: path.resolve(__dirname, './src/pages/photo.html'),
      filename: 'photo.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Rozklad',
      template: path.resolve(__dirname, './src/pages/rozklad.html'),
      filename: 'rozklad.html'
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true, 
  },
};
