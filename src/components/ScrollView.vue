<template>
    <div class="scroll-view" :class="(hasHeader?'has-header':'') + ' ' + (hasTabBar?'has-tab-bar':'')">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScrollView",
        props: ['hasHeader', 'hasTabBar'],
        beforeCreate() {
            document.documentElement.style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.documentElement.style.height = '100vh';
            document.getElementsByTagName('body')[0].style.height = '100vh';
        }
    }
</script>
<style lang="scss" scoped>
    @import "../common/scss/_tool.scss";
    .has-header {
        padding-top: remb(92px);
    }
    .has-tab-bar {
        padding-bottom: remb(100px);
    }
    .scroll-view {
        position: absolute;
        width: remb(750px);
        overflow: hidden;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        > div {
            overflow-y: auto;
            height: 100%;
        }
    }
</style>