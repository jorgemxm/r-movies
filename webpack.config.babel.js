'use strict';
//-----------------------------------
// Webpack Config
// - http://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js
//-----------------------------------
import path from 'path';
import webpack from 'webpack';
// import DashboardPlugin = from 'webpack-dashboard/plugin';

const PORT = process.env.PORT || 3000;

let wpConfigBase = {

  target:'web',
  cache: true,
  context: path.join(__dirname, 'src/js'),

  entry: {
    app: './main.js',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'lodash',
      "moment",
      "moment-duration-format",
      "speakingurl"
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, // it can also be written as -> test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src/js/'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            ["es2015", { "modules": false }],
            "react"
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // new DashboardPlugin({ port: 9001 }),

    new webpack.NoEmitOnErrorsPlugin()
  ],

  profile: true,

  stats: {
    colors: true,
    modules: false
  },

  // devtool options for development: eval | cheap-eval-source-map | cheap-module-eval-source-map
  devtool: 'eval', // Enabled in Dev environment

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: PORT
  }
};




// Extends webpack config: It Adds aditional Plugins for Production Builds only
//--------------
export default function(env) {

  if ( env && env.prod === 'true' ) {

    wpConfigBase.devtool = 'source-map';

    wpConfigBase.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          // NODE_ENV: JSON.stringify('production')
          NODE_ENV: '"production"'
        }
      })
      // TODO: Research for EnvironmentPlugin Usage
      // new webpack.EnvironmentPlugin({
      //     NODE_ENV: JSON.stringify('production')
      // }),
    )

    wpConfigBase.plugins.push(
      new webpack.LoaderOptionsPlugin({
        debug: false,
        minimize: true
      })
    )

    wpConfigBase.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          drop_console: true, // Drop `console` statements
          warnings: false,
          screw_ie8: true
        },
        sourcemap: true
      })
    )

    wpConfigBase.plugins.push(
      new webpack.BannerPlugin({
        banner: `Build: ${ new Date().toLocaleString() }`
      })
    )
  }

  return wpConfigBase;
}
