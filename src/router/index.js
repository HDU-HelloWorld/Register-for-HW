import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import front from '@/components/DepartIntro/front.vue'
import Back from '@/components/DepartIntro/Back.vue'
import Peoplesmart from '@/components/DepartIntro/Peoplesmart.vue'
import Admin from '@/components/DepartIntro/Admin.vue'
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
      name: 'front',
      component: front
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    },
    {
      path: '/peoplesmart',
      name: 'peoplesmart',
      component: Peoplesmart
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
