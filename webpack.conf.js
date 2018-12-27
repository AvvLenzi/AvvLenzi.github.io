const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const devMode = process.env.NODE_ENV !== 'production'

process.chdir('src');

module.exports = (mode, argv) => {

  return {
    entry: {
      index: "./pages/index.ejs",
      contatti: "./pages/contatti.ejs",
    },

    output: {
      path: path.resolve(__dirname, "dist"),
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["env"]
              }
            }
          ]
        },

        {
          test: /\.(html|ejs)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                  name: (name) => {
                    return "[name].html"
                  },
              },
            },
            "extract-loader",
            {
              loader: 'html-loader',
              options: {
                root: path.resolve(__dirname, 'src'),
                interpolate: true,
                attrs: ['img:src', 'link:href', 'script:src']
              }
            },
            {
              loader: 'ejs-html-loader',
              options: {} // context
            }
          ]
        },


        {
          test:  /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].css?hash=[hash:20]",
              },
            },
            "extract-loader",
            {
              loader: "css-loader",
              options: {
                  sourceMap: devMode
              }
            },
            "sass-loader"
          ]
        },

        {
          // Load all images as base64 encoding if they are smaller than 8192 bytes
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                // On development we want to see where the file is coming from, hence we preserve the [path]
                name: "[path][name].[ext]?hash=[hash:20]",
                limit: 8192
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(['dist']),
    ],

    devServer: {
      port: 8080,
      host: '0.0.0.0',
      inline: true,
    }

  };
}
