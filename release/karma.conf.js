var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    autoWatch: false,
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/widget.test.js'
    ],
    preprocessors: {
      'src/widget.test.js': ['webpack']
    },
    reporters: ['spec'],
    singleRun: true,
    webpack: webpackConfig.test,
    webpackMiddleware: {
      noInfo: true
    },
  });
};
