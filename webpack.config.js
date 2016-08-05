const path = require('path');
const webpack = require('webpack');
module.exports = env => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: './js/app.js',
    target: 'web',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      pathinfo: true,
    },
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel-loader', query:{presets:['es2015']}, exclude: /node_modules/},
        {test: /\.json$/, exclude: /node_modules/, loader: "json"},
        {
          include: path.resolve(__dirname, 'node_modules/pixi.js'),
          loader: 'transform/cacheable?browserify-versionify'
        }
      ],
      postLoaders: [
        {
          include: path.resolve(__dirname, 'node_modules/pixi.js'),
          loader: 'transform?brfs'
        }
      ]
    },
  };
};
