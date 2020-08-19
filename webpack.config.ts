const path = require('path');
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        exclude: '/node_modules/',
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
