var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

var isProd = process.env.NODE_ENV === 'production' // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/dist'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   use: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
              'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
              'image-webpack-loader'
          ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Homepage',
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Wallets',
      hash: true,
      template: './src/wallets.html',
      filename: 'wallets.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Desposit Cad Wire Transfer',
      hash: true,
      template: './src/deposit-cad-wire-transfer.html',
      filename: 'deposit-cad-wire-transfer.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Desposit Cad Wire Transfer',
      hash: true,
      template: './src/deposit-cad-e-transfer.html',
      filename: 'deposit-cad-e-transfer.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Transactions',
      hash: true,
      template: './src/transactions.html',
      filename: 'transactions.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Transactions',
      hash: true,
      template: './src/transactions-v2.html',
      filename: 'transactions-v2.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Transactions_No_Results',
      hash: true,
      template: './src/transactions-no-results.html',
      filename: 'transactions-no-results.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Login & Security Edit Phone',
      hash: true,
      template: './src/log-security-phone.html',
      filename: 'log-security-phone.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Login & Security Edit name',
      hash: true,
      template: './src/log-security-name.html',
      filename: 'log-security-name.html'
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Buy',
    //   hash: true,
    //   template: './src/buy.html',
    //   filename: 'buy.html',
    //   chunks:['app']
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'Buy',
    //   hash: true,
    //   template: './src/buy2.html',
    //   filename: 'buy2.html',
    //   chunks:['app']
    // }),
    new HtmlWebpackPlugin({
      title: 'Signup',
      hash: true,
      template: './src/signup.html',
      filename: 'signup.html',
      chunks:['app']
    }),
    new HtmlWebpackPlugin({
      title: 'Sign In',
      hash: true,
      template: './src/signin.html',
      filename: 'signin.html',
      chunks:['app']
    }),
    new HtmlWebpackPlugin({
      title: 'Thanks for Registering',
      hash: true,
      template: './src/thanks.html',
      filename: 'thanks.html',
      chunks:['app']
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
