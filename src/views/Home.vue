<template>
    <scroll-view :has-header="true" :has-tab-bar="true">
        <div class="banner"></div>
        <div class="icon-list">
            <div v-for="(item, index) in Icons" :key="index">
                <div v-on:click="go(item.router)">
                    <div class="icon" :class="item.icon_class"></div>
                    <div>{{item.name}}</div>
                </div>
            </div>
        </div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../components/ScrollView'
    export default {
        name: "Home",
        computed: {
            Icons() {
                return [
                    {
                        name: '会见管理',
                        router: '/meetingManage',
                        icon_class: 'meeting'
                    },
                    {
                        name:'进出A/B门',
                        router: '/enterOut',
                        icon_class: 'enter-out'
                    },
                    {
                        name:'内务管理',
                        router: '/dailyTasks',
                        icon_class: 'daily-tasks'
                    },
                    {
                        name:'警务督察',
                        icon_class: 'police-tasks',
                        router: '/policeInspector'
                    },
                    {
                        name:'问题记录',
                        icon_class: 'problem-record'
                    },
                    {
                        name:'问题反馈',
                        icon_class: 'problem-return'
                    },
                    {
                        name:'更多',
                        icon_class: 'more'
                    }
                ]
            }
        },
        components: {
            ScrollView
        },
        mounted() {
            this.$store.state.header.rightBtnClick = () => {
                console.log(this);
            }
        },
        methods: {
            go(url) {
                if (url) {
                    this.$store.state.direction = 'forward';
                    this.$router.push(url);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common/scss/_tool";
    $page: 'home';
    .banner {
        width: remb(750px);
        height: remb(278px);
        background-color: #DCDCDC;
    }
    .icon-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
            width: 33.333%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: remb(50px);
            font-size: remb(29px);
            line-height: remb(29px);
            > div {
                text-align: center;
                .icon {
                    width: remb(117px);
                    height: remb(117px);
                    border-radius: 50%;
                    margin-bottom: remb(20px);

                    &.more {
                        @include pcBg($page, 'home_icon06.png');
                    }

                    &.meeting {
                        @include pcBg($page, 'home_icon01.png');
                    }

                    &.enter-out {
                        @include pcBg($page, 'home_icon02.png');
                    }

                    &.daily-tasks {
                        @include pcBg($page, 'home_icon03.png');
                    }

                    &.problem-record {
                        @include pcBg($page, 'home_icon04.png');
                    }

                    &.problem-return {
                        @include pcBg($page, 'home_icon05.png');
                    }

                    &.police-tasks {
                        @include pcBg($page, 'home_icon07.png');
                    }
                }
            }
        }
    }
</style>