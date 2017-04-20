module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif)/,
        loaders: ['url-loader?name=[path][name].[ext]?[hash]']
      },
    ]
  }
}
