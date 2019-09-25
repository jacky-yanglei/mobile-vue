<template>
    <scroll-view :has-header="true" :has-tab-bar="true">
        <div>我的</div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../components/ScrollView'
    export default {
        name: "Mine",
        components: {
            ScrollView
        }
    }
</script>

<style scoped>

</style>