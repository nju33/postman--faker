const path = require('path')

module.exports = (_, args) => {
  return {
    mode: args.mode,
    entry: {
      ja: path.join(__dirname, 'src/postman/ja.ts')
    },
    output: {
      path: path.join(__dirname, 'dist/postman'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    }
  }
}
