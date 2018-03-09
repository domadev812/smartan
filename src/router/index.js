import Vue from 'vue'
import Router from 'vue-router'
import LandingHome from '@/components/LandingHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingHome
    }
  ]
})
