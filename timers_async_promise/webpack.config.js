const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: "./src/js/script.js",
    cards: "./src/js/card_script.js",
    posts: "./src/js/script_posts.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/cards.html",
      filename: "cards.html",
      chunks: ["cards"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/posts.html",
      filename: "posts.html",
      chunks: ["posts"],
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: "src/css/styles.css", to: "css" }],
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
  },
};
