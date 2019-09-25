<template>
    <div class="page">
        <div class="top-banner"></div>
        <div class="top-tab">
            <div v-on:click="doTabBar(1)" :class="tabBar===1?'active':''">卫生检查</div>
            <div v-on:click="doTabBar(2)" :class="tabBar===2?'active':''">历史纪录</div>
        </div>
        <div v-if="tabBar===1" class="check">
            <div class="check-tab">
                <div class="ed">宿舍卫生</div>
                <div class="ed">床上用品</div>
                <div>床上用品</div>
                <div>床上用品</div>
                <div>床上用品</div>
                <div>物品摆放</div>
            </div>
            <div class="scroll-view">
                <div class="list">
                    <div
                            v-on:click="goLink({
                            url: '/room/check/' + item.rule_id,
                            params: 'name=' + $router.currentRoute.query.name
                            })"
                            v-for="(item, index) in checkList"
                            :key="index"
                            class="item"
                            :class="item.checked?'active':''"
                    >
                        <div>{{item.rule_name}}：</div>
                        <div>{{item.rule_msg}}</div>
                    </div>
<!--                    <div class="item">-->
<!--                        <div>条款2：</div>-->
<!--                        <div>被子折叠不整齐</div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div>条款3：</div>-->
<!--                        <div>厕所未冲洗干净</div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
        <div v-if="tabBar===2" class="history">
            <div
                    v-for="(item, index) in historyList"
                    :key="index"
                    v-on:click="goLink({
                        url: '/room/history/' + item.check_id,
                        params: 'name=' + $router.currentRoute.query.name
                    })">
                <div><span>{{item.rule_name + ' : '}}</span>{{item.rule_msg}}</div>
                <div>
                    <div><div class="time-icon"></div>扣分 :<span>{{item.mark}}</span></div>
                    <div><div class="kou-icon"></div>{{item.check_time}}</div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "roomInfo",
        data() {
            return {
                tabBar: 1,
                // 检查条例
                checkList: [],
                historyList: []
            }
        },
        components: {
        },
        computed: {

        },
        methods: {
            // 切换tab
            doTabBar(index) {
                this.tabBar = index;
                sessionStorage.setItem('roomInfoTab', this.tabBar);
                this.viewChange();
            },
            // 视图改变
            viewChange() {
                // 如果当前是卫生检查标签
                if (this.tabBar === 1) {
                    this.getCheckList()
                }
                // 如果当前是历史纪录标签
                else if(this.tabBar === 2) {
                    this.gethistoryList();
                }
            },
            // 获取检查条例
            getCheckList() {
                this.updateFullLoadingStatus(true);
                let history = sessionStorage.getItem('checkList');
                if (history) {
                    this.checkList = JSON.parse(history);
                    this.updateFullLoadingStatus(false);
                } else {
                    setTimeout(() => {
                        this.checkList = [
                            {
                                rule_id: 1,
                                rule_name: '条款1',
                                rule_msg: '地上有烟头'
                            },
                            {
                                rule_id: 2,
                                rule_name: '条款2',
                                rule_msg: '被子折叠不整齐'
                            },
                            {
                                rule_id: 3,
                                rule_name: '条款3',
                                rule_msg: '厕所未冲洗干净'
                            },
                            {
                                rule_id: 4,
                                rule_name: '条款4',
                                rule_msg: '墙上有鞋印'
                            }
                        ];
                        sessionStorage.setItem('checkList', JSON.stringify(this.checkList));
                        this.updateFullLoadingStatus(false);
                    }, 1000);
                    return [];
                }
            },
            // 获取历史纪录
            gethistoryList () {
                this.updateFullLoadingStatus(true);
                setTimeout(() => {
                    this.updateFullLoadingStatus(false);
                    this.historyList = [
                        {
                            check_id:'1',
                            check_time:'2019/07/06',
                            rule_name: '条款4',
                            rule_msg: '墙上有鞋印',
                            mark: '-2'
                        },
                        {
                            check_id:'2',
                            check_time:'2019/07/06',
                            rule_name: '条款4',
                            rule_msg: '墙上有鞋印',
                            mark: '-2'
                        },
                        {
                            check_id:'3',
                            check_time:'2019/07/06',
                            rule_name: '条款4',
                            rule_msg: '墙上有鞋印',
                            mark: '-2'
                        },
                        {
                            check_id:'4',
                            check_time:'2019/07/06',
                            rule_name: '条款4',
                            rule_msg: '墙上有鞋印',
                            mark: '-2'
                        }
                    ]
                }, 1000);
            },
            goLink(obj) {
                this.$store.state.direction = 'forward';
                if (obj.params) {
                    this.$router.push(obj.url + '?' + obj.params);
                } else {
                    this.$router.push(obj.url);
                }
            }
        },
        mounted() {
            this.$store.state.header.title = this.$router.currentRoute.query.name;
            if (!sessionStorage.getItem('roomInfoTab') || parseInt(sessionStorage.getItem('roomInfoTab')) === 1) {
                sessionStorage.setItem('roomInfoTab', 1);
                this.tabBar = 1;
                this.getCheckList();
            } else {
                this.tabBar = 2;
                this.gethistoryList();
            }
        },
        destroyed() {
            this.updateFullLoadingStatus(false);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../common/scss/_tool";
    $page: '../../../assets/secondView/dailyTasks';
    .page {
        position: relative;
        padding-top: remb(92px);
        box-sizing: border-box;
        height: 100vh;
        .top-banner {
            background-color: #2480E6;
            height: remb(50px);
            position: relative;
            z-index: 5;
        }
        .top-tab {
            margin: remb(-53px) auto 0;
            display: flex;
            width: remb(694px);
            background-color: #fff;
            box-shadow:0 0 7px 0 rgba(0, 0, 0, 0.32);
            border-radius: remb(10px);
            position: relative;
            z-index: 5;
            > div {
                width: 50%;
                height: remb(99px);
                font-size: remb(33px);
                color: #565656;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                &:nth-of-type(1) {
                    &.active{
                        &:after {
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 2px;
                            background-color: #2480E6;
                            bottom: 0;
                            left: 0;
                            right: auto;
                            transition: all .2s ease;
                        }
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        background-color: #2480E6;
                        bottom: 0;
                        left: 100%;
                        transition: all .2s ease;
                    }
                }
                &.active {
                    color: #2480E6;
                }
            }
        }
        .check {
            padding: 0 remb(28px);
            position: relative;
            .check-tab {
                position: relative;
                overflow-x: auto;
                z-index: 5;
                display: flex;
                align-items: center;
                height: remb(125px);
                > div {
                    width: remb(212px);
                    height: remb(71px);
                    background-color: #ECECEC;
                    border-radius: remb(36px);
                    flex-shrink: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: remb(29px);
                    &:not(:first-child) {
                        margin-left: remb(30px);
                    }
                    &.ed {
                        background-color: #2480E6;
                        color: white;
                    }
                }
            }
            .scroll-view {
                position: absolute;
                height: 100vh;
                top: 0;
                left: 0;
                width: remb(750px);
                padding-top: remb(125px);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                > div {
                    padding: 0 remb(28px);
                    height: 100%;
                    overflow-y: auto;
                    > div {
                        font-size: remb(30px);
                        display: flex;
                        align-items: center;
                        height: remb(104px);
                        background-color: #ECECEC;
                        padding: 0 remb(18px);
                        margin-bottom: remb(14px);
                        &.active {
                            background-color: #D3E6FA;
                        }
                        > div {
                            &:nth-of-type(1) {
                                color: #FFAC0D;
                            }
                        }
                    }
                }
            }
        }
        .history {
            background-color: #f4f4f4;
            /*box-sizing: border-box;*/
            padding-top: remb(32px);
            min-height: 100%;
            > div {
                width: remb(694px);
                height: remb(147px);
                margin: 0 auto remb(20px);
                background-color: white;
                border-radius: remb(6px);
                padding: 0 remb(19px);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: relative;
                > div {
                    &:nth-of-type(1) {
                        padding-top: remb(10px);
                        font-size: remb(30px);
                        margin-bottom: remb(20px);
                        span {
                            color: #FFAC0D;
                        }
                    }
                    &:nth-of-type(2) {
                        font-size: remb(26px);
                        color: #666666;
                        display: flex;
                        span {
                            color: red;
                        }
                        > div {
                            display: flex;
                            align-items: center;
                            &:nth-of-type(1) {
                                margin-right: remb(64px);
                            }
                            > div {
                                display: inline-flex;
                                width: remb(24px);
                                height: remb(24px);
                                &.time-icon {
                                    @include pcBg($page, 'home_time_icon.png');
                                    margin-right: remb(8px);
                                }
                                &.kou-icon {
                                    @include pcBg($page, 'home_kou_icon.png');
                                    margin-right: remb(8px);
                                }
                            }
                        }
                    }
                    &:nth-of-type(3) {
                        position: absolute;
                        right: remb(18px);
                        height: 100%;
                        width: remb(17px);
                        display: flex;
                        align-items: center;
                        div {
                            width: remb(16px);
                            height: remb(29px);
                            @include pcBg($page, 'home_reback.png');
                        }
                    }
                }
            }
        }
    }

</style>