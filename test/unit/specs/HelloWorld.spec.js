import Vue from 'vue'
import market from '@/components/market'

describe('market.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(market)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
