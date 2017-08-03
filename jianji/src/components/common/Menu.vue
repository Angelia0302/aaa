<template>
    <div class="admin-left">
        <!-- <el-menu :default-active="onRoutes" mode="vertical" default="2" class="el-menu-vertical-demo"> -->
        <el-menu mode="vertical" default="2" class="admin-left__menu">
            <h3>简记后台</h3>
            <i class="el-icon-date"></i>
            <template v-for="item in items">
                <template>
                    <el-menu-item :index="item.index">
                        {{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'admin-left',
        data () {
            return {
                items: [
                    {
                        index: 'readme',
                        title: '客户管理'
                    },
                    {
                        index: '2',
                        title: '商城订单'
                    },
                    {
                        index: '3',
                        title: '发送通知'
                    },
                    {
                        index: 'basecharts',
                        title: '发票信息'
                    },
                    {
                        index: 'drag',
                        title: '用户反馈'
                    }
                ]
            }
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .admin-left {
        position: fixed;
        top: 0;
        left: 0;
        width: 140px;
        height: 100%;
        text-align: center;
        z-index: 1000;
    }

    .admin-left__menu {
        display: block;
        height: 100%;
        border-radius: 0;
        background: #999;
    }

    .el-icon-date {
        color: #fff;
        font-size: 60px;
        padding: 20px 0;
    }

    h3 {
        padding-top: 10px;
        color: #fff;
    }

    .el-menu-item {
        height: 40px;
        color: #fff;
        line-height: 40px;
        &:hover {
             color: #999;
             background: #fff;
        }
    }
</style>
