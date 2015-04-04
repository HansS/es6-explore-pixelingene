module.exports = {

    entry: {
        app: './src/app.js',
        vendor: './src/vendor.js',
        css: './src/app.scss'
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },

    resolve: {
        alias: {
            angular: __dirname + '/bower_components/angular/angular.js'
        }
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {loader: 'regenerator-loader'},
            {test: /\.scss$/, loader: 'ruby-sass-loader'}
        ]
    },
    watch: true,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src'
    }
};