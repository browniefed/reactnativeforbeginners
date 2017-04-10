const webpack = require('webpack');
require('dotenv').config()

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SERVER': JSON.stringify(process.env.SERVER),
        'process.env.STRIPE_PUBLIC_KEY': JSON.stringify(process.env.STRIPE_PUBLIC_KEY),
      })
    )
    return config
  }
}