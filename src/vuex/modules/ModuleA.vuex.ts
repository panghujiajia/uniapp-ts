export default {
	namespaced: true,
	state: {
		name: '胖虎和佳佳',
		userInfo: {
			age: 2,
		},
	},
	mutations: {
		// 保存活动信息
		saveName(state, name: string) {
			state.name = name;
		},
		// 保存用户信息
		saveUserInfo(state, data: any) {
			state.userInfo = { ...state.userInfo, ...data };
		},
	},
	getters: {
		age(state) {
			return state.userInfo.age;
		},
	},
	actions: {
		getName({ commit }, data) {
			commit('saveName', data);
		},
	},
};
