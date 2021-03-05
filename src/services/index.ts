import Request from 'luch-request';
import environment from '../environments';
import store from '@/vuex/index';

const createInterceptor = instance => {
	instance.interceptors.request.use(
		(config: any) => {
			// 可使用async await 做异步操作
			// console.log(config);
			if (config.custom.loading) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
			}
			// 判断接口是否需要token
			if (config.custom.auth) {
				const token = store.state.token;
				if (!token) {
					uni.showToast({
						title: '用户登录信息失效，请重新登录',
						icon: 'none',
					});
					// 如果token不存在，return Promise.reject(config) 会取消本次请求
					return Promise.reject(config);
				}
				config.header.token = token;
			}
			return config;
		},
		(config: any) => {
			// 可使用async await 做异步操作
			uni.hideLoading();
			uni.showToast({
				title: '请求错误，请稍后再试',
				icon: 'none',
			});
			return Promise.reject(config);
		}
	);
	instance.interceptors.response.use(
		(response: any) => {
			uni.hideLoading();
			console.log(response);
			// 是否忽略状态码200判断
			// 忽略后可在接口中单独做判断
			if (!response.config.custom.ignoreStatus) {
				if (response.data.status !== 200) {
					// 服务端返回的状态码不等于200，则reject()
					// return Promise.reject 可使promise状态进入catch
					uni.showToast({
						title: response.data.message || '响应错误，请稍后再试',
						icon: 'none',
					});
					return Promise.reject(response);
				}
			}
			return response;
		},
		(response: any) => {
			uni.hideLoading();
			/*  对响应错误做点什么 （statusCode !== 200）*/
			uni.showToast({
				title: '网络错误，请稍后再试',
				icon: 'none',
			});
			return Promise.reject(response);
		}
	);
};

export const http = new Request({
	baseURL: environment.url,
	custom: {
		auth: true, // 是否需要token验证
		loading: true, // 是否需要loading
		ignoreStatus: false, // 是否忽略状态码200判断
	},
});
createInterceptor(http);

// 创建多个http实例

export const http2 = new Request({
	baseURL: environment.url,
	custom: {
		auth: true, // 是否需要token验证
		loading: true, // 是否需要loading
		ignoreStatus: false, // 是否忽略状态码200判断
	},
});
createInterceptor(http2);
