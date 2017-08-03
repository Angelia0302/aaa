<template>
    <div id="app">
        <dataload :show="dataLoad"></dataload>
        <info :show="showInfo" :text="infoMsg" @on-ok="infoOk"></info>
        <confirm :show="isConfirm" :text="confirmMsg" :leftBtn="cnfLTBtn" @on-ok="comfirm"
                 @on-cancel="cancel"></confirm>
        <success :show="hasSuccess" :text="successText"></success>
        <router-view></router-view>
    </div>
</template>

<script>
    import dataload from './components/common/DataLoding.vue';
    import info from './components/common/Info.vue';
    import confirm from './components/common/Confirm.vue';
    import success from './components/common/Success.vue';
    export default {
        name: 'app',
        components: {
            dataload,
            info,
            confirm,
            success
        },
        mounted () {
            this.saveAppThis(this);
        }
    }
</script>

<style>
    @import "./assets/css/reset.less";
    @import "./assets/css/weui.less";
    html, body {
        width: 100%;
        height: 100%;
    }
    #app {
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
