/**
 * http配置
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
axios.interceptors.request.use(config => {
  // element ui Loading方法
  Loading.service({ fullscreen: true })
  return config
}, error => {
  Loading.service({ fullscreen: true }).close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  Loading.service({ fullscreen: true }).close()
  return data
}, error => {
  Loading.service({ fullscreen: true }).close()
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default axios
