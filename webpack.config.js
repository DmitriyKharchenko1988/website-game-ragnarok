const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/assets/js/index.js'
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production",
  devServer: {
    static: "./src",
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "God of War",
      template: "./index.html",
      filename: 'index.html',
      inject: 'body'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/styles', to: 'assets/styles' },
        { from: 'src/assets/js', to: 'assets/js' },
        { from: 'src/assets/images', to: 'assets/images' },
      ],
    }),
  ],
};