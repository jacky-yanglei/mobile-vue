<template>
    <div id="app" v-loading.fullscreen.lock="fullLoading">
        <Header></Header>
        <transition :name="transitionName">
            <router-view/>
        </transition>
        <transition :name="'tab-bar-transition'">
            <tab-bar></tab-bar>
        </transition>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    import Header from './components/Header'
    import TabBar from './components/TabBar'
    import Vue from 'vue'
    export default {
        name: 'App',
        computed: {
            header() {
                return this.$store.state.header
            },
            tabBar() {
                return this.$store.state.tabBar
            },
            fullLoading() {
                return this.$store.state.fullLoading
            }
        },
        data() {
            return {
                transitionName: '',
                tabBarTransition: ''
            }
        },
        components: {
            Header,
            TabBar
        },
        methods: {
            ...mapMutations([
                'changeHeader',
                'changTabBar',
                'updateFullLoadingStatus'
            ])
        },
        mounted() {
            Vue.prototype.updateFullLoadingStatus = (bool) => { // 全局loading方法
                this.updateFullLoadingStatus(bool);
            }
        },
        watch: {
            '$route'() {
                if (this.$store.state.direction === 'forward') {
                    this.transitionName = 'vux-pop-in';
                } else if (this.$store.state.direction === 'replace') {
                    this.transitionName = '';
                } else {
                    this.transitionName = 'vux-pop-out';
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "common/scss/_tool";

    #app {
        max-width: remb(750px);
        overflow: hidden;
    }

    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
    }
    .tab-bar-transition-enter {
        opacity: 0;
        transform: translate(0, 100%);
    }
    .tab-bar-transition-leave {
        opacity: 1;
        transform: translate(0, -100%);
    }
    .tab-bar-transition-enter-active,
    .tab-bar-transition-leave-active {
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
    }

    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(0, 0, 0);
    }
    .vux-pop-out-leave {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>
