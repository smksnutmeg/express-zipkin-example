const path = require('path');

const NODE_TARGET = 'node';
const NODE_VERSION = '10.14.2';
const DEV_BUNDLE = 'api.dev.js';
const PROD_BUNDLE = 'api.bundle.js';
const SRC_ENTRYPOINT = path.resolve(process.cwd(), './bin/www.js');
const BUILD_DIRECTORY = path.resolve(process.cwd(), './build');
const NODE_ENV_PRODUCTION = 'production';
const NODE_ENV_DEVELOPMENT = 'development';
const EXCLUDE_REGEXP = [/node_modules/];

module.exports = {
  target: NODE_TARGET || NODE_ENV_DEVELOPMENT,
  mode: process.env.NODE_ENV,
  entry: SRC_ENTRYPOINT,
  output: {
    path: BUILD_DIRECTORY,
    filename: process.env.NODE_ENV === NODE_ENV_PRODUCTION ? PROD_BUNDLE : DEV_BUNDLE
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: EXCLUDE_REGEXP,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: NODE_VERSION
                }
              }
            ]
          ]
        }
      }
    ]
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  }
};
