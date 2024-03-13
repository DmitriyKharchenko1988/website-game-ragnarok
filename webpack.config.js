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
  mode: "development",
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
          filename: 'static/[hash][ext][query]'
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "God of War",
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
};