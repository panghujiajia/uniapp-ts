const path = require('path');

const vars = path.resolve(__dirname, 'src/common/common.less');

// 包分析插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
module.exports = {
	configureWebpack: {
		plugins: [new BundleAnalyzerPlugin()],
	},
	css: {
		loaderOptions: {
			less: {
				globalVars: {
					hack: `true; @import "${vars}"`,
				},
			},
		},
	},
};
