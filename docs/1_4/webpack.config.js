var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: __dirname + "/main.js", //唯一入口文件
	output: {
		path: __dirname, //打包后的文件存放的地方
		filename: "main.out.js" //打包后输出文件的文件名
	},
	module: {
		// 规则匹配
		rules: [
		{
			test: /\.js$/, // 匹配什么文件
			loader: 'babel-loader', // 用什么加载器来解析
			exclude: /node_modules/ // 排除node_modules文件夹
		}]
	},
	// 解释参见 http://cn.vuejs.org/v2/guide/installation.html#独立构建-vs-运行时构建
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}