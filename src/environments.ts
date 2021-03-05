const env: string = process.env.NODE_ENV;

console.log(env);

const configs: any = {
	// 生产环境
	production: {
		url: 'https://www.xxx.com/api',
	},
	// 开发环境
	development: {
		url: 'https://www.xxx.com/api',
	},
};

export default configs[env];
