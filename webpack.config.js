let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// related to TODO1 bellow
// let svgBG = require('svg-inline-loader?classPrefix!./src/img/bg.svg');

module.exports  = {
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCssAssetsPlugin({})
        ]
      },
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: './dist'
                }
              },
              "css-loader"
            ]
          } 
        //   TODO1: Find a solution for using SVG files. The Loader bellow seems not to be working or needs more configuration.
        //   {
        //     test: /\.svg$/,
        //     loader: 'svg-inline-loader'
        // }
        ]
      },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'app.css'
            }),

        new HtmlWebpackPlugin({
        title: 'Portfolio | Cosmin Simion',
        minify: {
            collapseWhitespace: true
        },
        hash:true,
        template: 'src/index.html'
        
        })
    ]
}   
