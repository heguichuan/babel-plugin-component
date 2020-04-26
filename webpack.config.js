const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: "ImportAdaptor", //导出时的全局名称
    // libraryExport: 'default', //导出default，源码导出为cmd风格不需要加，es6导出模块需要加。
    libraryTarget: "commonjs2"
  },
  externals: {
    "@babel/helper-module-imports": '@babel/helper-module-imports'
  }
};