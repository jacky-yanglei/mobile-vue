<template>
    <scroll-view :has-header="true">
        <div class="page">
            <div class="block-line"></div>
            <div class="background-white">
                <div class="check-time item">
                    <div>检查时间</div>
                    <div>
                        <label class="time">{{time}}<input v-model="time" type="text"></label>
                    </div>
                </div>
                <div class="ep-item item">
                    <div>条款2 :</div>
                    <div>被子折叠不整齐</div>
                </div>
                <div class="grade-item item">
                    <div>扣分<span>(可修改)</span></div>
                    <div>
                        <label class="text">-{{grade}}<input v-model="grade" type="text"></label>
                    </div>
                </div>
            </div>
            <div class="block-line"></div>
            <div class="textarea item">
                <div>备注</div>
                <label>
                    <textarea placeholder="备注"></textarea>
                </label>
            </div>
            <div class="block-line"></div>
            <div class="picker item">
                <div>拍照取证</div>
                <div class="picker-list">
                    <div class="pic"></div>
                    <div class="pic camera">
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="btns">
                <button v-on:click="save()">保存</button>
                <button v-on:click="cancel()">取消</button>
            </div>
        </div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../../../components/ScrollView'
    export default {
        name: "roomCheck",
        data() {
            return {
                time: '2019-06-29',
                grade: 2
            }
        },
        components: {
            ScrollView
        },
        methods: {
            // 保存
            save(){
                // 这里写AJAX 保存请求
                /*
                *
                * */
                // 然后保存当前的条例ID 上面的AJAX会得到一个 条例ID需要存在本地
                let checkList = JSON.parse(sessionStorage.getItem('checkList'));
                for (let i = 0; i < checkList.length; i++) {
                    if (this.$router.currentRoute.params.id + '' === checkList[i].rule_id + '') {
                        checkList[i].checked = true;
                    }
                }
                sessionStorage.setItem('checkList', JSON.stringify(checkList));
                this.$router.go(-1);
            },
            cancel() {
                this.$router.go(-1);
            }
        },
        mounted() {
            this.$store.state.header.title = this.$router.currentRoute.query.name;
            this.updateFullLoadingStatus(true);
            setTimeout(() => {
                this.updateFullLoadingStatus(false);
            }, 1000)
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
        min-height: 100%;
        background-color: #f4f4f4;
        .item {
            padding: 0 remb(35px);
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
            width: remb(695px);
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
            textarea {
                width: 100%;
                resize: none;
                border: none;
                outline: none;
                height: remb(150px);
                padding: 0;
                margin-top: remb(30px);
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
                width: remb(278px);
                height: remb(78px);
                color: white;
                font-size: remb(32px);
                border-radius: remb(7px);
                &:nth-of-type(1) {
                    background-color: #2480E6;
                    margin-right: remb(40px);
                }
                &:nth-of-type(2) {
                    background-color: #23C4A7;
                }
            }
        }
    }
</style>