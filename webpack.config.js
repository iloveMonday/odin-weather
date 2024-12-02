const path = require('path');

module.exports = {
    mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 5000
          }
        }]
      },
    ],
  },
};
