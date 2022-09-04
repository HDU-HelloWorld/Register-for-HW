import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import IndexPage from '@/pages/IndexPage'
import LoadingPage from '@/pages/LoadingPage'
import AuthPage from '@/pages/AuthPage'
import NotFound from '@/pages/404Page'
import ConfirmPage from '@/pages/ConfirmPage'
import SuccessPage from '@/pages/SuccessPage'
import Sakana from '@/components/Sakana.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/sakana',
      name: 'sakana',
      component: Sakana
    },
    {
      path: '/loading',
      name: 'LoadingPage',
      component: LoadingPage
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
    },
    {
      path: '/confirm',
      name: 'ConfirmPage',
      component: ConfirmPage
    },
    {
      path: '/success',
      name: 'SuccessPage',
      component: SuccessPage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
