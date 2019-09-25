<template>
    <div class="tab-bar" v-if="tabBar.show">
        <div v-on:click="tabTo('/home')">
            <div class="home-icon icon" :class="activeName === 'home'?'actived':''"></div>
            <div class="text">首页</div>
        </div>
        <div v-on:click="tabTo('/search')">
            <div class="search-icon icon" :class="activeName === 'search'?'actived':''"></div>
            <div class="text">查询</div>
        </div>
        <div class="add">
            <div>新增</div>
        </div>
        <div v-on:click="tabTo('/message')">
            <div class="message-icon icon" :class="activeName === 'message'?'actived':''"></div>
            <div class="text">消息</div>
        </div>
        <div v-on:click="tabTo('/mine')">
            <div class="mine-icon icon" :class="activeName === 'mine'?'actived':''"></div>
            <div class="text">我的</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {
                routerName: ''
            }
        },
        computed: {
            activeName() {
                return this.routerName.split('?')[0].split('/')[1];
            },
            tabBar() {
                return this.$store.state.tabBar;
            }
        },
        methods: {
            tabTo(url) {
                this.$store.state.direction = 'replace';
                this.$router.replace(url);
            }
        },
        mounted() {
          this.routerName =  this.$router.currentRoute.path;
        },
        watch: {
            '$route'(to) {
                this.routerName = to.path;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common/scss/_tool";
    $page: 'common';
    .tab-bar {
        position: fixed;
        bottom: 0;
        z-index: 100;
        width: 100%;
        max-width: remb(750px);
        display: flex;
        height: remb(100px);
        align-items: flex-end;
        justify-content: space-between;
        padding-left: remb(59px);
        padding-right: remb(59px);
        padding-bottom: remb(8px);
        box-sizing: border-box;
        > div {
            text-align: center;
            &:not(.add) {
                .icon {
                    width: remb(53px);
                    height: remb(53px);
                    margin-bottom: remb(4px);
                    &.home-icon {
                        @include pcBg($page, 'home_tab01.png');
                        &.actived {
                            @include pcBg($page, 'home_tab01_hover.png');
                            &+.text {
                                color: #2480E6;
                            }
                        }
                    }
                    &.search-icon {
                        @include pcBg($page, 'home_tab02.png');
                        &.actived {
                            @include pcBg($page, 'home_tab02_hover.png');
                            &+.text {
                                color: #2480E6;
                            }
                        }
                    }
                    &.message-icon {
                        @include pcBg($page, 'home_tab03.png');
                        &.actived {
                            @include pcBg($page, 'home_tab03_hover.png');
                            &+.text {
                                color: #2480E6;
                            }
                        }
                    }
                    &.mine-icon {
                        @include pcBg($page, 'home_tab04.png');
                        &.actived {
                            @include pcBg($page, 'home_tab04_hover.png');
                            &+.text {
                                color: #2480E6;
                            }
                        }
                    }
                }
                .text {
                    font-size: remb(24px);
                    line-height: remb(24px);
                    transform-origin: center;
                    transform: scale(0.9166666666666667);
                    color: #2A2A2A;
                }
            }
        }
        .add {
            width: remb(151px);
            height: remb(151px);
            @include pcBg($page, 'home_tab_add.png');
            color: white;
            > div {
                font-size: remb(24px);
                line-height: remb(24px);
                margin-top: remb(97px);
                transform-origin: center;
                transform: scale(0.8333333333333333);
            }
        }
    }
</style>