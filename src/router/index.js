import Vue from 'vue'
import Router from 'vue-router'
import market from '@/components/market'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/market',
    },
    {
      path: '/market',
      name: 'market',
      component: market
    }
  ]
})
