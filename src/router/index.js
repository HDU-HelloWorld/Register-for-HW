import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import home from '@/components/home'
import WelcomePage from '@/components/WelcomePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/welcome',
      name: 'WelcomePage',
      component: WelcomePage
    }
  ]
})
