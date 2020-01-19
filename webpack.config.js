const path = require('path');
module.exports = {
  entry: './src/index.js',
  module:{
    rules:[
      {
        test : /\.js$/,
        exclude : /node-modules/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve:{
    extensions:['js']
  },
  output: {
    filename: 'ReduxTool.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReduxTool',
    libraryTarget: 'umd'
  }
};