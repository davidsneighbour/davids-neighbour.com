const path = require("path");

// module.exports = (env, argv) =>
// noinspection JSUnresolvedVariable
module.exports = (env) =>
  // noinspection JSUnresolvedVariable
  ({
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "inline-source-map",

    context: path.resolve(__dirname, "assets"),

    entry: {
      main: path.join(__dirname, "assets/js", "theme.js"),
    },

    target: ["web", "es2017"],

    output: {
      path: path.join(__dirname, "static/assets"),
      filename: "[name].js",
      chunkFilename: "[id].css",
      clean: true,
    },

    performance: {
      maxEntrypointSize: 400000,
      maxAssetSize: 100000,
      hints: "warning",
    },

    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },

    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js?$/,
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
  });
