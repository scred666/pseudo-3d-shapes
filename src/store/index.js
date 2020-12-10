import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layers: [
      {
        fill: 'aqua',
        height: 0,
        type: 'cylinder'
      },
      {
        fill: '#41b883',
        height: 120,
        type: 'cube'
      },
      {
        fill: '#F4E23F',
        height: 160,
        type: 'pyramid'
      },
      {
        fill: '#41b883',
        height: 120,
        type: 'cube'
      },
      {
        fill: 'red',
        height: 60,
        type: 'cube'
      },
      {
        fill: 'blue',
        height: 60,
        type: 'cube'
      },
      {
        fill: 'orange',
        height: 60,
        type: 'cube'
      },
      {
        fill: 'violet',
        height: 60,
        type: 'cube'
      }
    ]
  },
  mutations: {
    UPDATE_LAYER_TYPE: (state, { index }) => {
      state.layers[index].type = state.layers[index].type === 'cube' ? 'pyramid' : 'cube'
    },
    UPDATE_LAYER_HEIGHT: (state, { index, val }) => {
      state.layers[index].height = val
    }
  },
  actions: {},
  modules: {}
})
