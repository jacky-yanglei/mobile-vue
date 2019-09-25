import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: {}, // 头部信息
    tabBar: {}, // 底部tab信息
    direction: {}, // history
    fullLoading: false
  },
  mutations: {
    changeHeader(state, headers) { // 改变头部信息
      let title = headers.title || '';  //标题
      let show = headers.show || false;  // 是否显示标题
      let backBtnShow = headers.backBtnShow || false; // 是否显示返回按钮
      let rightBtnShow = headers.rightBtnShow  || false; // 是否显示右边的按钮
      let rightBtnText = headers.rightBtnText  || '';   // 右边按钮的文字
      let rightBtnColor = headers.rightBtnColor  || 'white';  // 右边按钮的字体颜色
      state.header = {
        title,
        show,
        backBtnShow,
        rightBtnShow,
        rightBtnText,
        rightBtnColor
      }
    },
    changTabBar(state, tabBars) {
      let show = tabBars.show || false;
      state.tabBar = {
        show
      }
    },
    updateDirection(state, payload) {
      state.direction = payload.direction
    },
    updateFullLoadingStatus(state, status) {
      state.fullLoading = status
    }
  },
  actions: {

  }
})
