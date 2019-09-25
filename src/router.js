import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
// import Home from "";

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '登录',
            meta: {
                header: {
                    backBtnShow: false,
                    headerShow: false,
                }
            },
            component: Login
        },
        {
            path: '/home',
            name: '首页',  // 头部标题名称
            meta: {
                header: { // 头部标题是否显示
                    backBtnShow: false,
                    headerShow: true
                },
                tabBar: { // 底部菜单栏是否显示
                    show: true
                }
            },
            component: () => import('./views/Home')
        },
        {
            path: '/search',
            name: '查询',
            meta: {
                header: {
                    backBtnShow: false,
                    headerShow: true,
                },
                tabBar: {
                    show: true
                }
            },
            component: () => import('./views/Search')
        },
        {
            path: '/message',
            name: '消息',
            meta: {
                header: {
                    backBtnShow: false,
                    headerShow: true,
                },
                tabBar: {
                    show: true
                }
            },
            component: () => import('./views/Message')
        },
        {
            path: '/mine',
            name: '我的',
            meta: {
                header: {
                    backBtnShow: false,
                    headerShow: true,
                },
                tabBar: {
                    show: true
                }
            },
            component: () => import('./views/Mine')
        },
        {
            path: '/meetingManage',
            name: '会见管理',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/pages')
        },
        {
            path: '/enterOut',
            name: '进出A/B门',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/pages')
        },
        {
            path: '/policeInspector',
            name: '警务督察',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/pages')
        },
        {
            path: '/dailyTasks',
            name: '选择监舍',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/DailyTasks')
        },
        {
            path: '/room/:id',
            name: '',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/DailyTasks/roomInfo.vue')
        },
        {
            path: '/room/check/:id',
            name: '',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/DailyTasks/roomCheck')
        },
        {
            path: '/room/history/:id',
            name: '',
            meta: {
                header: {
                    backBtnShow: true,
                    headerShow: true,
                },
                tabBar: {
                    show: false
                }
            },
            component: () => import('./views/second-view/DailyTasks/roomHistory')
        }
    ]
})

export default router
