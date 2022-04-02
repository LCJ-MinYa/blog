const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('webpack 实例'),
		new HtmlWebpackPlugin({
			template: './index.html', //指定模板路径
			filename: 'index.html', //指定文件名
		})
	],
	devServer: {
		port: 3000,
		open: true
	}
}