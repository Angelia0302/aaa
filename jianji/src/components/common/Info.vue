<!--

 -->
<template>
    <div v-if="show" key="info">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title"></strong></div>
            <div class="weui-dialog__bd" v-html="text"></div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary dialog__ok" @click="ok">确定</a>
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
                    return '';
                }
            }
        },
        methods: {
            ok () {
                this.$emit('on-ok');
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .dialog__ok {
        color: #242b47;
    }
</style>
