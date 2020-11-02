import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layers: [
      {
        fill: '#F4E23F',
        height: 80
      },
      {
        fill: '#41b883',
        height: 120
      },
      {
        fill: 'red',
        height: 60
      },
      {
        fill: 'blue',
        height: 60
      },
      {
        fill: 'orange',
        height: 60
      },
      {
        fill: 'violet',
        height: 60
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
