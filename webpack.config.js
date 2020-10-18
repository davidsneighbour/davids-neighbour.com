const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    path.resolve('assets', 'script.js'),
    //path.resolve('assets', 'theme.scss'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  // plugins: [
  //   new MiniCssExtractPlugin(),
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      // {
      //   test: /\.(css)$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //   ],
      // },
      // {
      //   test: /\.(scss)$/,
      //   use: [{
      //     loader: 'style-loader',
      //   }, {
      //     loader: 'css-loader',
      //   }, {
      //     loader: 'postcss-loader',
      //   }, {
      //     loader: 'sass-loader'
      //   }]
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg|ttf|woff|otf|eot)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[contenthash].[ext]',
      //         outputPath: 'static/img',
      //         esModule: false
      //       }
      //     }
      //   ]
      // }
    ],
  },
};
