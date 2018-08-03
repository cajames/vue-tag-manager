const debug = process.env.NODE_ENV !== "production";

const baseConfig = {
  mode: debug ? "development" : "production",
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      }
    ]
  },
};

const pluginEntry = {
  ...baseConfig,
  entry: "./src/index.ts",
  output: {
    path: __dirname + "/lib",
    filename: "index.js",
    library: "VueTagManager",
    libraryTarget: "commonjs"
  }
};

const nativeEntry = {
  ...baseConfig,
  entry: "./src/native-entry.ts",
  output: {
    path: __dirname + "/lib",
    filename: "TagManager.js",
    library: "VueTagManager",
    libraryTarget: "umd"
  }
};

const groupedExports = [pluginEntry, nativeEntry];

module.exports = groupedExports;
