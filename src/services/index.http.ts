/**
 * 此处定义接口
 */

// http库文档地址
// https://www.quanzhan.co/luch-request/

import { http } from './index';

// 获取列表
export const $getList = async (params: any): Promise<any | boolean> => {
	try {
		const res = await http.get('/list', {
			params,
			custom: {
				auth: false, // 该接口无需token
				loading: false, // 该接口无需loading
				ignoreStatus: true, // 忽略status 200 判断
			},
		});
		/**
		 * 可以在这里做一些数据处理再返回
		 */
		return res.data.data;
	} catch (error) {
		return false;
	}
};

// 提交请求
export const $getSubmit = async (params: any): Promise<any> => {
	try {
		const res = await http.post('/submit', params, {
			custom: {
				auth: false, // 该接口无需token
				loading: false, // 该接口无需loading
				ignoreStatus: true, // 忽略status 200 判断
			},
		});
		return res.data.data;
	} catch (error) {
		return false;
	}
};
