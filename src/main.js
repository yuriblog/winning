// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http/http'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

Vue.prototype.http = axios
// 注册全局组件
import buttonSet from '../common/button-set'
import oqInput from '../common/oq-input'
Vue.component('button-set', buttonSet)
Vue.component('oq-input', oqInput)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
