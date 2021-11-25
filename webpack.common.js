const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: '/node_modules/',
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Dart Sass
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
    ]
  },
  devServer: {
    watchFiles: ['src/**/*.html'],
    liveReload: true,
    magicHtml: true,
    compress: true,
    port: 8080,
  },
  performance: { 
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};