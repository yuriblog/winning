import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      /*
      *  按需加载  resolve必须  渲染页面
      */
      component: (resolve) => {
        require(['../components/Home'], resolve)
      }
    }, {
      path: '/record',
      name: 'record',
      component: (resolve) => {
        require(['../components/Record'], resolve)
      }
    }, {
      path: '/Home',
      name: 'Home',
      component: (resolve) => {
        require(['../components/Home'], resolve)
      }
    }, {
      path: '/Luck',
      name: 'Luck',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/luck28/Luck'], resolve)
      }
    }, {
      path: '/Canada',
      name: 'Canada',
      component: (resolve) => {
        require(['../components/canada/canada'], resolve)
      }
    }, {
      path: '/Racing',
      name: 'Racing',
      component: (resolve) => {
        require(['../components/beijing/Racing'], resolve)
      }
    }, {
      path: '/Ticket',
      name: 'Ticket',
      component: (resolve) => {
        require(['../components/chongqing/Ticket'], resolve)
      }
    }, {
      path: '/Personal',
      name: 'Personal',
      component: (resolve) => {
        require(['../components/Personal'], resolve)
      }
    }, {
      path: '/Register',
      name: 'Register',
      component: (resolve) => {
        require(['../components/person/RegisterLogin'], resolve)
      }
    }, {
      path: '/Recharge',
      name: 'Recharge',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/my-info/Recharge'], resolve)
      }
    }, {
      path: '/CardRecharge',
      name: 'CardRecharge',
      component: (resolve) => {
        require(['../components/my-info/CardRecharge'], resolve)
      }
    }, {
      path: '/BettingManage',
      name: 'BettingManage',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/my-info/BettingManage'], resolve)
      }
    }, {
      path: '/Financial',
      name: 'Financial',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/my-info/Financial'], resolve)
      }
    }, {
      path: '/Setting',
      name: 'Setting',
      component: (resolve) => {
        require(['../components/person/Setting'], resolve)
      }
    }, {
      path: '/UserData',
      name: 'UserData',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/person/UserData'], resolve)
      }
    }, {
      path: '/Invite',
      name: 'Invite',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/my-info/InviteFriend'], resolve)
      }
    }, {
      path: '/Withdraw',
      name: 'Withdraw',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/my-info/Withdraw'], resolve)
      }
    }, {
      path: '/BankCard',
      name: 'BankCard',
      meta: {
        requireAuth: true
      },
      component: (resolve) => {
        require(['../components/my-info/BankCard'], resolve)
      }
    }
  ]
})
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (localStorage.getItem('username')) {
      next()
    } else {
      next({
        path: '/Register',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
