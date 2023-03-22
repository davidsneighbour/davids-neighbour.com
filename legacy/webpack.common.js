const path = require("path");

module.exports = {
  target: ["browserslist"],

  entry: {
    main: path.join(__dirname, "assets/js", "theme.js"),
  },

  output: {
    path: path.join(__dirname, "static/assets/"),
    filename: "[name].js",
    chunkFilename: "[id].css",
    clean: true,
  },

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,
    hints: "warning",
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
      },
    ],
  },
};
