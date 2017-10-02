const webpack = require('webpack')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const extractSCSSPlugin = new ExtractTextPlugin({
    filename: 'css/main.css',
    allChunks: true
});

const _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    entry: ['index.tsx', 'assets/scss/main.scss' ],
    output: {
        filename: 'app.js',
        publicPath: 'dist',
        path: BUILD_DIR
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
        stats: {
            modules: false,
            chunks: false,
            children: false,
            chunkModules: false,
            hash: false,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['src', 'node_modules'],
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    module: {
        rules: [
            { test: /\.html$/, use: [ { loader: 'html-loader', options: { minimize: true, modules: true } }], include: APP_DIR } ,
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: APP_DIR },
            { test: /\.js$/, enforce: 'pre', loader: 'source-map-loader' },
            { test: /\.scss$/, use: extractSCSSPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: { modules: true, sourceMap: true , localIdentName: '[name]__[local]___[hash:base64:5]' }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }), include: APP_DIR }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    plugins: [
        new WebpackNotifierPlugin(),
        extractSCSSPlugin,
        new webpack.LoaderOptionsPlugin({
            options: {
              postcss: [
                autoprefixer(),
              ]
             }
         })
        ]
};

