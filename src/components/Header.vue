<template>
    <div v-if="header.show" class="header">
        <div v-if="header.backBtnShow" class="back-btn">
            <button v-on:click="goBack"></button>
        </div>
        <div>{{ header.title }}</div>
        <div class="right-btn" v-if="header.rightBtnShow">
            <button v-on:click="rightBtnClick" :style="rightBtnColor">{{header.rightBtnText}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                delay: false
            }
        },
        computed: {
            header() {
                return this.$store.state.header;
            },
            rightBtnColor() {
                console.log((this.header.rightBtnColor?this.header.rightBtnColor: 'white'));
                return 'color:' + (this.header.rightBtnColor?this.header.rightBtnColor: 'white')
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            rightBtnClick() {  // 头部右边按钮点击事件
                if (this.delay === false && this.$store.state.header.rightBtnClick) {
                    this.delay = true;
                    this.$store.state.header.rightBtnClick();
                    setTimeout(() => {
                        this.delay = false
                    }, 300)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common/scss/_tool";
    $page:'common';
    .header {
        display: flex;
        position: fixed;
        z-index: 100;
        width: 100%;
        max-width: remb(750px);
        height: remb(92px);
        background-color: #2480E6;
        font-size: remb(39px);
        color: white;
        align-items: center;
        justify-content: center;
        .back-btn {
            position: absolute;
            left: remb(20px);
            height: 100%;
            top: 0;
            width: remb(30px);
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                width: remb(17px);
                height: remb(30px);
                @include pcBg($page, 'back_btn.png');
            }
        }
        .right-btn {
            position: absolute;
            right: remb(20px);
            height: 100%;
            top: 0;
            width: remb(120px);
            display: flex;
            align-items: center;
            justify-content: flex-end;
            > button {
                font-size: remb(32px);
            }
        }
    }
</style>