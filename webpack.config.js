/**
 * This is the webpack.config file used to configure Webpack.
 * 
 * In short, Webpack makes our code able to be imported to the client's browser. Many new JS libraries, such as TypeScript, React, Redux, and more use webpack to bundle their transpiled code, and ship it to the targeted library. By default, Webpack exports our code to the targeted library, `var`.
 * 
 * Resource: https://webpack.github.io/docs/configuration.html 
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    // Entry is the main file that will bootstrap our application. 
    entry: './main',
    // source-map allows us to debug our jsx code in the browser
    devtool: 'source-map',
    // once webpack is done bundling, it outputs it to the specified directory. __dirname is a Node.js constant. 
    output: { 
        path: __dirname, 
        filename: 'public/bundle.js',
        libraryTarget: 'var'
    },
    module: {
        loaders: [
            {
                // We are targeting all *.js files and running the babel-loader tool. Babel-loader is the plugin for Webpack.
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    // these presets had to be manually installed. This allows us to use features found in ES2015 and the React library (jsx).
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};