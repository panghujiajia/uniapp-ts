<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	mpType: 'app',
	onLaunch() {},
	onShow() {
		console.log('App Show');
	},
	onHide() {
		console.log('App Hide');
	},
});
</script>

<style lang="less">
/*每个页面公共css */
@import url('./common/common.less');
</style>
