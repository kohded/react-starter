import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const pathJoin = (p) => path.join(__dirname, p);
const pathResolve = (p) => path.resolve(__dirname, p);
const styleLoaders = (ext) => [
  {
    loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    ...(isProduction && {
      options: {
        // Without this, MiniCssExtractPlugin prepends css path to font path in build.
        // https://stackoverflow.com/questions/63251134/font-urls-path-is-wrong-and-includes-css-path-after-webpack-build
        publicPath: '../..',
      },
    }),
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: ext === 'css' ? 1 : 3,
      modules: {
        auto: /\.module.(css|less|scss)$/,
        localIdentName: '[name]-[local]-[hash:base64:5]',
      },
      sourceMap: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  },
];

module.exports = {
  devServer: {
    cert: pathJoin('config/ssl/cert.pem'),
    compress: true,
    contentBase: pathJoin('build'),
    historyApiFallback: true, // If false, BrowserRouter doesn't work when entering browser url.
    host: '0.0.0.0', // Can view on localhost and ip address over network.
    https: true,
    key: pathJoin('config/ssl/key.pem'),
    open: true,
    overlay: {
      errors: true,
    },
    port: 8000,
    public: 'localhost:8000',
    stats: 'minimal',
  },
  devtool: isProduction ? false : 'source-map',
  entry: {
    index: pathJoin('src/index.tsx'),
  },
  mode,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(js|ts)x?$/,
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/docs',
            },
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
          {
            loader: 'image-webpack-loader',
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
    minimizer: isProduction ? [new TerserJSPlugin(), new CssMinimizerPlugin()] : [],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:5].js',
    path: pathResolve('build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          context: pathResolve('src/assets/static'),
          from: '*',
        },
        {
          context: pathResolve('src'),
          from: 'assets/images/icons/*',
        },
      ],
    }),
    new ESLintPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    new HtmlWebpackPlugin({
      template: pathResolve('src/index.html'),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: 'assets/css/[id].[contenthash:5].chunk.css',
      filename: 'assets/css/[name].[contenthash:5].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  target: 'web',
};
