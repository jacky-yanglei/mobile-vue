<template>
    <scroll-view :has-header="true" :has-tab-bar="true">
        <div>消息</div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../components/ScrollView'
    export default {
        name: "Message",
        components: {
            ScrollView
        }
    }
</script>

<style scoped>

</style>