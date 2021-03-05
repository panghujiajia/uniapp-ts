import Vue from 'vue';
import App from './App.vue';
import store from './vuex';

Vue.config.productionTip = false;

new App({
	store,
}).$mount();
