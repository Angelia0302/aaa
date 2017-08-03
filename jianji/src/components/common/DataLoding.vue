<!--

scoped
 -->
<template>
    <section class="data-loading" v-show="show">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </section>
</template>

<script>
	export default {
		name: 'data-loading',
		props: {
			show: {
				type: Boolean,
				default () {
					return false;
				}
			}
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../assets/css/weui.less";
</style>
