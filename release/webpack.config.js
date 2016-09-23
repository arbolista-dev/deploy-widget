var webpack = require('webpack'),
    path = require('path');

module.exports = {
  "development": {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname + 'build'),
      filename: 'bundle.dev.js',
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],
    target: 'web'
  },
  "production": {
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname + 'build'),
      filename: 'bundle.min.js',
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false,
          semicolons: true
        },
        sourceMap: true
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],
    target: 'web'
  },
  "test": {
      entry: './src/widget.test.js',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        }]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
      ]
  }
};
