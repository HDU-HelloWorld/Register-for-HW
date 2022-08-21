import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import home from '@/components/home'
// import WelcomePage from '@/components/WelcomePage'
import IndexPage from '@/components/IndexPage'
import LoadingPage from '@/components/LoadingPage'
import AuthPage from '@/components/AuthPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/loading',
      name: 'LoadingPage',
      component: LoadingPage
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/auth',
      name: 'AuthPage',
      component: AuthPage
    }
  ]
})
