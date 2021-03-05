import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import ModuleAVuex from './modules/ModuleA.vuex';
// 创建持久化配置
const dataState = createPersistedState({
	storage: {
		getItem: key => uni.getStorageSync(key),
		setItem: (key, value) => uni.setStorageSync(key, value),
		removeItem: key => uni.removeStorageSync(key),
	}, // 持久化方式
	paths: ['token'], // 持久化数据 持久化token
});

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: 'panghujiajia', // 用户token
		userInfo: {
			openId: 'panghujiajia',
		},
	},
	mutations: {
		// 更新用户token
		saveToken(state, token) {
			state.token = token;
		},
	},
	getters: {
		// 获取用户openid
		openId(state) {
			return state.userInfo.openId;
		},
	},
	actions: {},
	modules: {
		moduleA: ModuleAVuex, // 定义子vuex模块 moduleA为模块的命名空间名
	},
	plugins: [dataState],
});
