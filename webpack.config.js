const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const styleLoaders = (ext) => [
    {
      loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: ext === 'css' ? 1 : 3,
        sourceMap: true,
        modules: {
          auto: /\.module.(css|less|scss)$/,
          localIdentName: '[name]-[local]-[hash:base64:5]',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
  ];
  const pathJoin = (p) => path.join(__dirname, p);
  const pathResolve = (p) => path.resolve(__dirname, p);

  return {
    devServer: {
      compress: true,
      contentBase: pathJoin('build'),
      overlay: {
        errors: true,
        warnings: true,
      },
      port: 8000,
      stats: 'minimal',
    },
    devtool: isProduction ? 'none' : 'eval-cheap-module-source-map',
    entry: {
      index: pathJoin('src/index.tsx'),
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.(js|ts)x?$/,
        },
        {
          test: /\.(bmp|gif|ico|jpe?g|png|svg|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: pathResolve('assets/images'),
              },
            },
            {
              loader: 'image-webpack-loader',
            },
          ],
        },
        {
          test: /\.(docx|pdf|txt)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: pathResolve('assets/docs'),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: styleLoaders('css'),
        },
        {
          test: /\.less$/,
          use: [
            ...styleLoaders(),
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
                sourceMap: true,
              },
            },
            {
              loader: 'style-resources-loader',
              options: {
                injector: 'append',
                patterns: [pathResolve('src/assets/less/*.less')],
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            ...styleLoaders(),
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'style-resources-loader',
              options: {
                patterns: [pathResolve('src/assets/scss/*.scss')],
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()] : [],
    },
    output: {
      filename: 'static/js/[name].[contenthash:5].js',
      path: pathResolve('build'),
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            context: pathResolve('public'),
            from: '**/*',
            globOptions: {
              ignore: ['index.html'],
            },
          },
        ],
      }),
      new ESLintPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      new HtmlWebpackPlugin({
        template: pathResolve('public/index.html'),
      }),
      new MiniCssExtractPlugin({
        chunkFilename: 'static/css/[id].[contenthash:5].chunk.css',
        filename: 'static/css/[name].[contenthash:5].css',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  };
};
