<!--

 -->
<template>
    <div id="dialog1" v-if="show" key="confirm">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title"></strong></div>
            <div class="weui-dialog__bd" v-html="text"></div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="hideMask">{{leftBtn}}</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="ok">{{rightBtn}}</a>
            </div>
        </div>
    </div>
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
                    return '已成功';
                }
            },
            leftBtn: {
            	type: String,
                default () {
            		return '取消'
                }
            },
            rightBtn: {
                type: String,
                default () {
                    return '确定'
                }
            }
        },
        methods: {
            ok () {
                this.$emit('on-ok');
            },
            hideMask () {
                this.$emit('on-cancel');
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
