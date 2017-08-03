<!--

 -->
<template>
    <transition-group
        name="fade"
    >
        <div class="mask" v-if="show" @click="hideMask" key="mask"></div>
        <div id="toast" v-if="show" key="success">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">{{text}}</p>
            </div>
        </div>
    </transition-group>
</template>

<script>
	export default {
		name: 'success-alert',
        props: {
			show: {
				type: Boolean,
                default () {
					return false;
                }
            },
            text: {
                type: String,
                default () {
                    return '保存成功';
                }
			}
        },
        methods: {
            hideMask () {
            	this.$emit('on-hide');
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .mask{
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        z-index:98;
        background:rgba(255,255,255,0);
    }
</style>
