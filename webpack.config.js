const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv({
      // Load the environment variables from the GitHub repository secrets
      systemvars: true,
      // Only load the environment variables that are defined in the `.env.example` file
      safe: true,
      // The path to the `.env.example` file
      path: '.env.example'
    })
  ]
}; 
