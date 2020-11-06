import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layers: [
      {
        fill: '#F4E23F',
        height: 280,
        type: 2
      },
      {
        fill: '#41b883',
        height: 120,
        type: 1
      },
      {
        fill: 'red',
        height: 60,
        type: 1
      },
      {
        fill: 'blue',
        height: 60,
        type: 1
      },
      {
        fill: 'orange',
        height: 60,
        type: 1
      },
      {
        fill: 'violet',
        height: 60,
        type: 1
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
