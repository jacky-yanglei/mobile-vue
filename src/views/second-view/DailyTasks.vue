<template>
    <scroll-view :has-header="true">
        <div class="view">
            <div class="side-bar">
                <div>
                    <div class="item" :class="currentItem && currentItem.id === item.id?'active':''" v-for="(item, index) in sideData" :key="index" v-on:click="select(item)">{{item.building + item.unit}}</div>
                </div>
            </div>
            <div class="content">
                <div class="block" v-for="(item, index) in unitData" :key="index">
                    <div class="title">
                        <div>{{item.floor}}</div>
                        <div></div>
                    </div>
                    <div class="list">
                        <div v-on:click="go(inItem, item.floor)" class="item" v-for="(inItem, inIndex) in item.Room" :key="inIndex">
                            <div>
                                <div>{{inItem.roomNo}}</div>
                            </div>
                            <div class="value">{{inItem.mark}}分</div>
                        </div>
<!--                        <div class="item"></div>-->
<!--                        <div class="item"></div>-->
<!--                        <div class="item"></div>-->
<!--                        <div class="item"></div>-->
<!--                        <div class="item"></div>-->
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../../components/ScrollView'

    export default {
        name: "DailyTasks",
        data() {
            return {
                currentItem: null
            }
        },
        created() {
            // 清除房间信息
            sessionStorage.removeItem('checkList');
            sessionStorage.removeItem('roomInfoTab');
        },
        computed: {
            // 侧边栏信息
            sideData() {
                return [
                    {
                        id: '1',
                        building: '1栋',
                        unit: '1单元'
                    },
                        {
                            id: '2',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '3',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '4',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '5',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '6',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '7',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '8',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '9',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '0',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '11',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '12',
                            building: '1栋',
                            unit: '1单元'
                        },
                        {
                            id: '13',
                            building: '2栋',
                            unit: '2单元'
                        },
                        {
                            id: '14',
                            building: '2栋',
                            unit: '2单元'
                        },
                        {
                            id: '15',
                            building: '2栋',
                            unit: '2单元'
                        },
                        {
                            id: '16',
                            building: '2栋',
                            unit: '2单元'
                        },
                        {
                            id: '17',
                            building: '2栋',
                            unit: '2单元'
                        },
                        {
                            id: '18',
                            building: '2栋',
                            unit: '2单元'
                        }]
            },
            // 单元信息
            unitData() {
                return [
                    {
                        id: 'ejdijdie',
                        floor: '一层',
                        Room: [
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            }
                        ]
                    },
                    {
                        id: 'ejdijdie',
                        floor: '二层',
                        Room: [
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            },
                            {
                                roomId: '21312312',
                                roomNo: '101',
                                mark: '100'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            ScrollView
        },
        mounted() {
            this.currentItem = this.sideData[0];
        },
        methods: {
            select() {
                console.log(arguments[0]);
                this.currentItem = arguments[0]
            },
            go(obj, floor) {
                this.$store.state.direction = 'forward';
                this.$router.push(
                    {
                        path: '/room/' + obj.roomId + '?name=' + this.currentItem.building + this.currentItem.unit + floor + obj.roomNo + '房间'
                    }
                    );
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../common/scss/_tool";
    $page: '../../assets/secondView/dailyTasks';
    .view {
        height: 100%;
        display: flex;
        .side-bar {
            height: 100%;
            overflow-y: auto;
            width: remb(172px);
            background-color: #F5F5F5;
            div.item {
                padding: remb(10px);
                min-height: remb(89px);
                font-size: remb(29px);
                line-height: remb(32px);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                word-wrap: break-word;
                word-break: break-all;
                text-align: center;
                box-sizing: border-box;
                &.active {
                    background-color: white;
                }
            }
        }
        .content {
            word-break: break-all;
            flex: 1;
            height: 100%;
            overflow-y: auto;
            .block {
                padding: remb(30px) remb(17px);
                .title {
                    display: flex;
                    align-items: center;
                    > div:nth-of-type(1) {
                        display: flex;
                        align-items: center;
                        &:before {
                            content: '';
                            @include pcBg($page, 'house_icon.png');
                            display: inline-block;
                            width: remb(27px);
                            height: remb(25px);
                            margin-right: remb(8px);
                        }
                    }
                    > div:nth-of-type(2) {
                        height: 2px;
                        background-color: #2480E6;
                        margin-left: remb(14px);
                        flex: 1;
                    }
                }
                .list {
                    margin-top: remb(30px);
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    > div {
                        width: remb(117px);
                        &.item {
                            text-align: center;
                            height: remb(103px);
                            @include pcBg($page, 'house_bg.png');
                            margin-bottom: remb(21px);
                            > div {
                                &:nth-of-type(1) {
                                    height: remb(50px);
                                    display: flex;
                                    align-items: center;
                                    color: white;
                                    font-size: remb(25px);
                                    div {
                                        flex-shrink: 0;
                                        word-break: keep-all;
                                        white-space:nowrap;
                                    }
                                    &:before {
                                        content: '';
                                        display: inline-block;
                                        width: remb(27px);
                                        height: remb(25px);
                                        @include pcBg($page, 'house_icon_white.png');
                                        margin-left: remb(10px);
                                        margin-right: remb(10px);
                                        flex-shrink: 0;
                                    }
                                }
                                &:nth-of-type(2) {
                                    height: remb(53px);
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: red;
                                    font-size: remb(22px);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>