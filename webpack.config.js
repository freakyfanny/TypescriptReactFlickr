const webpack = require('webpack')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


var ieCSSPlugin =  new ExtractTextPlugin({filename: 'assets/css/ie.css',
    allChunks: true,
    disable: false
});

var mainCSSPlugin = new ExtractTextPlugin({filename: 'assets/css/main.css',
    allChunks: true,
    disable: false
});

const sassLoaders = [
    'css-loader',
    'sass-loader?indentedSyntax=sass&sourceMap&includePaths[]=' + path.resolve(__dirname, './src')
];


const _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    entry: [
        'index.tsx'
    ],
    /*output: {
    filename: 'app.js',
    publicPath: 'dist',
    path: path.resolve('dist')
    },*/
    output: {
        path: root('dist'),
        publicPath: 'dist',
        filename: 'assets/[name].js',
        chunkFilename: '[id].chunk.js'
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
    devtool: "source-map",

    module: {
        rules: [
            { test: /\.html$/, use: [ { loader: 'html-loader', options: { minimize: true } }], } ,
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') },
            { test: /\.js$/, enforce: "pre", loader: "source-map-loader" },
            {
                test: /\ie.scss$/,
                loader: ieCSSPlugin.extract({use : 'style-loader', fallback: sassLoaders.join('!')})
            },
            { test: /\.scss$/, exclude: /\ie.scss$/,
                loader: mainCSSPlugin.extract({use: 'style-loader', fallback: sassLoaders.join('!')})
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        ieCSSPlugin,
        mainCSSPlugin
    ]
};
