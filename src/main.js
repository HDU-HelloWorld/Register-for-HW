import Vue from 'vue'
import App from './App'
import router from './router'
//  引入UI库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入字体样式
import '@/assets/myfont/font.css'
//  引入fullpage插件
import 'mv-full-page/lib-dist/mv-full-page.css'
import MvFullPage from 'mv-full-page'
//  引入适配文件
import './utils/rem.js'
import VuePrlx from 'vue-prlx'
import axios from 'axios'
import 'animate.css' // 引入animate.css

Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
Vue.use(VuePrlx)
Vue.use(MvFullPage)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
