const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.tsx',
  output:{
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: path.join(__dirname, '/dist/index.html')
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  }
}
