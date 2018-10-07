const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWepackPlugin = require('clean-webpack-plugin');


// 导出配置模块
module.exports = {
	entry:{
		main:'./app/app.js',
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name]-bundle.js'
	},
	mode:'development',
	devServer: {
      contentBase: path.join(__dirname, "./dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
      port: 9000, //端口改为9000
      open:true, // 自动打开浏览器，适合懒人
    },
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:path.resolve(__dirname,'./node_modules'),
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:['env','react']
						}
					}
				]
			},
			{
				test:/\.css$/,
				loader:['style-loader','css-loader']
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./app/index.html',
			hash:true
		}),

		new CleanWepackPlugin(['dist']),
	]
}