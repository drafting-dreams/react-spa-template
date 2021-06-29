const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/env', '@babel/preset-react'],
      //     },
      //   },
      // },
      {
        // svg loader, which makes us could import svg as a react component
        test: /(\.svg)$/i,
        loader: '@svgr/webpack',
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.main\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true, // enable css module
              modules: {
                // enable css, as well as ke-bab to camelCase transformation
                exportLocalsConvention: 'camelCaseOnly',
              },
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.main\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      inject: 'body',
      publicPath: '/',
    }),
  ],
  devServer: {
    port: 3000,
    compress: true,
    contentBase: [
      // if not added, favicon.ico became 404 after one hot reload
      path.resolve(__dirname, 'public'),
      path.resolve(__dirname, 'src/assets'),
    ],
    historyApiFallback: true, // get around react-router api
    // if we are using a proxy like whistle, we need to set up the following field
    // allowedHosts: ['entry.task.sre'], // get around hostcheck, or we can set disableHostCheck to true, but it's not safe
  },
}
