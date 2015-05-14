var path = require('path'),
    APP_ROOT = path.join(__dirname, '/src'),
    BOWER_ROOT = path.join(__dirname, '/bower_components');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './app.js'
    },

    output: {
        path: path.join(__dirname, 'src'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel?optional=runtime'}
        ]
    },

    watch: true,
    devServer: {
        contentBase: "./src",
    }
};