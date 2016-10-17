module.exports = {
  context: __dirname,
  entry: "./src/",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  module: {
    loaders: [
        // allow use of ES6 features and JSX syntax
        {
          test: /\.(js|es6|jsx)$/,
          // Enable caching for improved performance during development
          loaders: ['babel?cacheDirectory'],
          // Only include the src folder to speed up the process
          include: __dirname + "src"
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  }
};