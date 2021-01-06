import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultLayer: {
      fill: '#41b883',
      height: 120,
      type: 'cube'
    },
    layers: [
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
        fill: '#ff0000',
        height: 60,
        type: 'cube'
      },
      {
        fill: '#0000ff',
        height: 60,
        type: 'cube'
      },
      {
        fill: '#ffa500',
        height: 60,
        type: 'cube'
      },
      {
        fill: '#ee82ee',
        height: 60,
        type: 'cube'
      }
    ]
  },
  mutations: {
    UPDATE_LAYERS_ORDER: (state, payload) => {
      state.layers = payload
    },
    UPDATE_LAYER_TYPE: (state, { index }) => {
      state.layers[index].type = state.layers[index].type === 'cube' ? 'pyramid' : 'cube'
    },
    // UPDATE_LAYER_HEIGHT: (state, { index, val }) => {
    //   state.layers[index].height = val
    // },
    // UPDATE_LAYER_FILL: (state, { index, color }) => {
    //   state.layers[index].fill = color
    // },
    UPDATE_LAYER_PARAM: (state, { index, param, val }) => {
      state.layers[index][param] = val
    },
    ADD_NEW_LAYER: state => {
      state.layers.unshift({ ...state.defaultLayer })
    },
    REMOVE_LAYER: (state, payload) => {
      state.layers.splice(payload, 1)
    }
  },
  actions: {},
  modules: {}
})
