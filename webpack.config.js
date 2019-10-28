module.exports = {
  entry: [
    '@babel/polyfill',
    './client/index.js'
  ],
  mode: 'development',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(nodule_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        user: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
