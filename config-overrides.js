const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve("process/browser"),
    buffer: require.resolve("buffer/"),
    util: require.resolve("util/"),
    assert: require.resolve("assert/"),
    stream: require.resolve("stream-browserify"),
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });

  return config;
};
