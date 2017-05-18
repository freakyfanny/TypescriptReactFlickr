const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: "index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // tell Webpack to load TypeScript files
    resolve: {
      // Look for modules in .ts(x) files first, then .js
      extensions: ['.ts', '.tsx', '.js'],

      // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
      modules: ['src', 'node_modules'],
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') },
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      inline: true,
    },
};
