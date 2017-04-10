const webpack = require("webpack");
require("dotenv").config();

const COURSE_TOKEN = "learnreactnative";
const GA_KEY = "UA-92022203-1";

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.SERVER": JSON.stringify(process.env.SERVER),
        "process.env.STRIPE_PUBLIC_KEY": JSON.stringify(process.env.STRIPE_PUBLIC_KEY),
        "process.env.COURSE_TOKEN": JSON.stringify(COURSE_TOKEN),
        "process.env.GA_KEY": JSON.stringify(GA_KEY),
      })
    );
    return config;
  },
};
