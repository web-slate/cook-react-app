const webpack = require("webpack");
const path = require("path");
const PACKAGE = require("./package.json");

// WebPack Plugins.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
    alias: {
      "@google-clone/i18n": path.resolve(__dirname, "src", "i18n"),
      "@google-clone/images": path.resolve(
        __dirname,
        "src",
        "assets",
        "images"
      ),
      "@google-clone/widgets": path.resolve(
        __dirname,
        "src",
        "components",
        "widgets"
      ),
      "@google-clone/blocks": path.resolve(
        __dirname,
        "src",
        "components",
        "blocks"
      ),
      "@google-clone/services": path.resolve(__dirname, "src", "services"),
      "@google-clone/store": path.resolve(__dirname, "src", "store"),
      "@google-clone/hooks": path.resolve(__dirname, "src", "hooks"),
      "@google-clone/utils": path.resolve(__dirname, "src", "utils"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "google-clone-app.js",
    chunkFilename: "[name].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      VERSION: PACKAGE.version,
    }),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src/static/index.html"),
    }),

    // Copy all Assets, Icons to `public` Folder.
    new CopyPlugin({
      patterns: [
        { from: "./src/static/images", to: "images" },
        {
          from: "./src/static/translations/en.json",
          to: "translations/en.json",
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./src/static",
    hot: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
};
