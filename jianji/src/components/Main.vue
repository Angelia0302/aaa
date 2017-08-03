<template>
    <div id="main">
        <router-view></router-view>
        <AdminMenu></AdminMenu>
    </div>
</template>
<script>
    import AdminMenu from './common/Menu.vue';
    export default {
        name: 'main',
        components: {
            AdminMenu
        }
    }
</script>
<style lang="less" scoped>
    #main {
        height: 100vh;
    }
</style>
