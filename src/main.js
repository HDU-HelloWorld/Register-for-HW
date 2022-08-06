import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入字体样式
import '@/assets/myfont/font.css'
import 'mv-full-page/lib-dist/mv-full-page.css'
import MvFullPage from 'mv-full-page'
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
