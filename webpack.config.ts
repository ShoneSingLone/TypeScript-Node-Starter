
import path from 'path';
import HotModuleReplacementPlugin from 'webpack-hot-middleware';

export default {
  // JS 执行入口文件
  entry: {
    first: './public/js/main.ts'
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, '../public'),
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      // 用正则去匹配要用该 loader 转换的 css 文件
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?minimize'],
    }]
  },
};