<template>
    <scroll-view has-header="true">
        <div class="list" :class="$router.currentRoute.path.split('/')[1]">
            <second-view-item
                    v-for="(item, index) in view"
                    :key="index" :name="item.name"
                    :background="index%2 === 0?'blue':'green'"
                    :icon="item.class"></second-view-item>
        </div>
    </scroll-view>
</template>

<script>
    import ScrollView from '../../components/ScrollView'
    import SecondViewItem from '../../components/SecondViewItem'
    import ViewData from './viewData'

    export default {
        name: "pages",
        data() {
            return {
                view: ViewData[this.$router.currentRoute.path.split('/')[1]]
            }
        },
        components: {
            ScrollView,
            SecondViewItem
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../common/scss/_tool";
    $page: '../../assets/secondView';
    .list {
        box-sizing: border-box;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: remb(47px);
        padding-bottom: remb(37px);
        > div {
            margin-bottom: remb(21px);
        }
        &.meetingManage {
            @include pcBg($page, 'second_view_hjgl_bg.png');
        }
        &.enterOut {
            @include pcBg($page, 'second_view_jcabm_bg.png');
        }
        &.policeInspector {
            @include pcBg($page, 'second_view_jwdc_bg.png');
        }
    }
</style>