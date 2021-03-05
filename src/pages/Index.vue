<template>
	<view class="container">
		<view>Hello world!</view>
		<view>name：{{ name }}</view>
		<view>age：{{ age }}</view>
		<view>token：{{ token }}</view>
		<view>openId：{{ openId }}</view>
	</view>
</template>
<script lang="ts">
import { $getList } from '@/services/index.http';
import { List } from '@/types/index.type';
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation, State } from 'vuex-class';
@Component({
	name: 'Index',
})
export default class Index extends Vue {
	@State('token') private token!: string; // 从主vuex模块取state
	@State('name', { namespace: 'moduleA' }) // 命名空间的方式取modelA里的state
	private name!: string;
	@Getter('openId') // 从主vuex模块取getter
	private openId!: string;
	@Getter('age', { namespace: 'moduleA' }) // 命名空间的方式取modelA里的getter
	private age!: string;
	@Mutation('saveToken') // 声明主vuex模块中的mutation
	private saveToken!: (token: string) => void;
	@Mutation('saveName', { namespace: 'moduleA' }) // 通过命名空间的方式来声明modelA里的mutation
	private saveName!: (name: string) => void;
	private data: List[] = [];
	private onLoad() {
		console.log(this.age);
		console.log(this.name);
		console.log(this.token);
		console.log(this.openId);
		// this.getList();
	}
	// 获取列表
	private async getList() {
		const data = await $getList({});
		this.data = data;
		this.saveName('张三');
		this.saveToken('abc');
	}
}
</script>
<style lang="less" scoped>
.container {
	padding: 20rpx;
}
</style>
