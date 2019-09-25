import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import flexible from './common/js/flexible'
import './common/css/normalize.css'

import { Button, Select, Loading } from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Loading)
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

flexible(window, window['lib'] || (window['lib'] = {}))

Vue.config.productionTip = false

// 设置路由跳转时公共设置信息
router.beforeEach(function (to, from, next) {
  // store.commit('updateLoadingStatus', {isLoading: true})
  store.commit('changeHeader', {
    title: to.name,
    show: to.meta.header ? to.meta.header.headerShow : false,
    backBtnShow: to.meta.header ? to.meta.header.backBtnShow : false,
    rightBtnShow: to.meta.header ? to.meta.header.rightBtnShow : false,
    rightBtnText: to.meta.header ? to.meta.header.rightBtnText : '',
    rightBtnColor: to.meta.header ? to.meta.header.rightBtnColor : ''
  })
  store.commit('changTabBar', {
    show: to.meta.tabBar ? to.meta.tabBar.show : false,
  })
  document.documentElement.style.overflow = 'visible';
  document.getElementsByTagName('body')[0].style.overflow = 'visible';
  document.documentElement.style.height = 'auto';
  document.getElementsByTagName('body')[0].style.height = 'auto';
  next()
})

router.afterEach(function () {
  setTimeout(function () {
    store.state.direction = ''
  }, 0);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
