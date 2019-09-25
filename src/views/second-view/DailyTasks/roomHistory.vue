<template>
    <scroll-view :has-header="true">
        <div class="page">
            <div class="block-line"></div>
            <div class="background-white">
                <div class="check-time item">
                    <div>检查时间</div>
                    <div>
                        <div>{{historyData.time}}</div>
                    </div>
                </div>
                <div class="ep-item item">
                    <div>{{historyData.rule_name}} :</div>
                    <div>{{historyData.rule_msg}}</div>
                    <div>
                        <div></div>
                        <div>{{historyData.mark}}</div>
                    </div>
                </div>
            </div>
            <div class="block-line"></div>
            <div class="textarea item">
                <div>备注</div>
                <div>
                    {{historyData.mark_msg}}
                </div>
            </div>
            <div class="block-line"></div>
            <div class="picker item">
                <div>附件</div>
                <div class="picker-list">
                    <div v-for="(item, index) in historyData.check_imgs" :key="index" class="pic"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="btns">
                <button v-on:click="back()">返回</button>
            </div>
        </div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../../../components/ScrollView'
    export default {
        name: "roomHistory",
        data() {
            return {
                // 获取的数据
                historyData: {
                    check_id: '1',
                    check_time: '2019-06-29',
                    rule_name: '条款2',
                    rule_msg: '被子折叠不整齐',
                    mark: '-2',
                    mark_msg: '备注',
                    check_imgs: [
                        '','',''
                    ]
                }
            }
        },
        components: {
            ScrollView
        },
        mounted() {
            this.$store.state.header.title = this.$router.currentRoute.query.name;
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../common/scss/_tool";
    $page: '../../../assets/secondView/dailyTasks';
    .page {
        min-height: 100%;
        /*padding: 0 remb(35px);*/
        background-color: #f4f4f4;
        .item {
            padding: 0 remb(30px);
            background-color: white;
        }
        .block-line {
            height: remb(14px);

            width: remb(750px);
            margin-left: remb(-35px);
        }
        .background-white {
            background-color: white;
        }
        .check-time {
            display: flex;
            position: relative;
            justify-content: space-between;
            height: remb(92px);
            align-items: center;
            font-size: remb(32px);
            .time {
                position: relative;
                width: remb(300px);
                display: block;
                text-align: right;
                input {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 0;
                    opacity: 0;
                }
            }
        }
        .ep-item {
            display: flex;
            align-items: center;
            height: remb(104px);
            font-size: remb(29px);
            background-color: #D3E6FA;
            padding: 0 remb(18px);
            position: relative;
            width: remb(670px);
            margin: 0 auto;
            border-radius: remb(6px);
            > div {
                &:nth-of-type(1) {
                    color: #FFAC0D;
                    margin-right: remb(14px);
                }
                &:nth-of-type(2) {
                    color: #2480E6;
                }
                &:nth-of-type(3) {
                    position: absolute;
                    right: remb(20px);
                    color: red;
                    display: flex;
                    align-items: center;
                    > div {
                        &:nth-of-type(1) {
                            width: remb(24px);
                            height: remb(24px);
                            @include pcBg($page, 'home_kou_icon.png');
                            margin-right: remb(8px);
                        }
                    }
                }
            }
        }
        .grade-item {
            margin-top: remb(40px);
            border-top: 1px solid #F3F3F3;
            display: flex;
            position: relative;
            justify-content: space-between;
            height: remb(92px);
            align-items: center;
            font-size: remb(32px);
            span {
                color: red;
                font-size: remb(24px);
            }
            .text {
                position: relative;
                width: remb(300px);
                display: block;
                text-align: right;
                color: red;
                input {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 0;
                    opacity: 0;
                }
            }
        }
        .textarea {
            font-size: remb(30px);
            line-height: remb(30px);
            padding-top: remb(30px);
            > div:last-child {
                width: 100%;
                height: remb(150px);
                padding: 0;
                margin-top: remb(30px);
                color: #BCBCBC;
            }
        }
        .picker {
            font-size: remb(30px);
            line-height: remb(30px);
            padding-top: remb(30px);
            .picker-list {
                margin-top: remb(30px);
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding-bottom: remb(24px);
                align-items: flex-start;
                > div {
                    width: remb(202px);
                    margin-bottom: remb(20px);
                    &.pic {
                        height: remb(186px);
                        background-color: #E6E6E6;
                        &.camera {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            > div {
                                width: remb(89px);
                                height: remb(69px);
                                @include pcBg($page, 'house_photo.png')
                            }
                        }
                    }
                }
            }
        }
        .btns {
            display: flex;
            justify-content: center;
            margin-top: remb(90px);
            padding-bottom: remb(60px);
            > button {
                width: remb(600px);
                height: remb(78px);
                color: white;
                font-size: remb(32px);
                border-radius: remb(7px);
                background-color: #2480E6;
            }
        }
    }
</style>