let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports  = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
                
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Portfolio | Cosmin Simion',
        minify: {
            collapseWhitespace: true
        },
        hash:true,
        template: 'src/index.html'
    })]
}