const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

// module.exports = (env, argv) =>
// noinspection JSUnresolvedVariable
module.exports = (env) =>
  // noinspection JSUnresolvedVariable
  ({
    mode: "development",

    devtool: "inline-source-map",

    // mode: env.production ? "production" : "development",
    // devtool: env.production ? "source-map" : "inline-source-map",
    // context: path.resolve(__dirname, "assets"),
    entry: {
      main: path.join(__dirname, "assets/js", "theme.js"),
    },

    target: ["browserslist"],

    output: {
      path: path.join(__dirname, "static/assets"),
      filename: "[name].js",
      chunkFilename: "[id].js",
      assetModuleFilename: "[hash][ext][query]",
      clean: true,
    },

    stats: "minimal",

    performance: {
      maxEntrypointSize: 400000,
      maxAssetSize: 250000,
      hints: "warning",
    },

    optimization: {
      minimize: !!env.production,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
      emitOnErrors: true,
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
      mangleWasmImports: true,
      mangleExports: "deterministic",
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

// // noinspection JSUnresolvedVariable
// // eslint-disable-next-line import/no-extraneous-dependencies
// const { merge } = require("webpack-merge");
//
// // eslint-disable-next-line import/no-extraneous-dependencies
// const commonConfig = require("@dnb-org/webpack-config");
//
// module.exports = (env) => {
//   const localConfig = {
//     mode: env.production ? "production" : "development",
//     devtool: env.production ? "source-map" : "inline-source-map",
//
//     optimization: {
//       minimize: !!env.production,
//     },
//   };
//   return merge(localConfig, commonConfig);
// };
