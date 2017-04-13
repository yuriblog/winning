import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
