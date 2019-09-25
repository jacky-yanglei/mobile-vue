<template>
    <div class="item" :class="background">
        <div :class="icon"></div>
        <div>{{name}}</div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        name: "SecondViewItem",
        props: ['name', 'background', 'icon'],
        computed: {},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common/scss/_tool";

    $page: 'secondView';
    .item {
        width: remb(639px);
        height: remb(114px);
        color: white;
        display: flex;
        align-items: center;
        font-size: remb(33px);
        box-sizing: border-box;
        padding-left: remb(48px);
        padding-right: remb(20px);
        justify-content: space-between;
        flex-shrink: 0;
        &.blue {
            @include pcBg($page, 'second_view_bluebg.png')
        }

        &.green {
            @include pcBg($page, 'second_view_greenbg2.png')
        }

        > div {
            &:nth-of-type(1) {
                width: remb(56px);
                height: remb(56px);
            }
            &:nth-of-type(2) {
                width: remb(300px);
            }
            &:nth-of-type(3) {
                width: remb(17px);
                height: remb(28px);
                @include pcBg($page, 'second_view_right.png');
            }
        }
        .family {
            @include pcBg($page, 'second_view_icon01.png');
        }
        .lawyer {
            @include pcBg($page, 'second_view_icon02.png');
        }
        .stranger-apply {
            @include pcBg($page, 'second_view_icon03.png');
        }
        .stranger-check-in {
            @include pcBg($page, 'second_view_icon04.png');
        }
        .outside-assist-apply {
            @include pcBg($page, 'second_view_icon05.png');
        }
        .outside-assist-check-in {
            @include pcBg($page, 'second_view_icon06.png');
        }
        .outside-car-apply {
            @include pcBg($page, 'second_view_icon07.png');
        }
        .outside-car-check-in {
            @include pcBg($page, 'second_view_icon08.png');
        }
        .problem-record {
            @include pcBg($page, 'second_view_icon09.png');
        }
        .problem-return {
            @include pcBg($page, 'second_view_icon10.png');
        }
    }
</style>