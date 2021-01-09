import Vue from 'vue'
import Vuex from 'vuex'
import { getRandomId } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageParams: {
      shift: {
        isEnabled: true,
        value: 6
      }
    },
    defaultLayer: {
      fill: '#41b883',
      height: 120,
      type: 'cube',
      id: null
    },
    layers: [
      {
        id: 'wn2pf9ruh',
        fill: '#F4E23F',
        height: 160,
        type: 'pyramid'
      },
      {
        id: '5e5kvp9zq',
        fill: '#41b883',
        height: 120,
        type: 'cube'
      },
      {
        id: 'mafj776kg',
        fill: '#ff0000',
        height: 60,
        type: 'cube'
      },
      {
        id: '9luxy76ua',
        fill: '#0000ff',
        height: 60,
        type: 'cube'
      },
      {
        id: 'egi0z6zdg',
        fill: '#ffa500',
        height: 60,
        type: 'cube'
      },
      {
        id: 'kgl48aakt',
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
    // UPDATE_LAYER_TYPE: (state, { index, type }) => {
    //   state.layers[index].type = type
    // },
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
      const newLayer = { ...state.defaultLayer }
      newLayer.id = getRandomId()
      state.layers.unshift(newLayer)
    },
    REMOVE_LAYER: (state, payload) => {
      state.layers.splice(payload, 1)
    },
    TOGGLE_FIGURE_SHIFT: (state, payload) => {
      state.imageParams.shift.isEnabled = payload
    },
    UPDATE_FIGURE_SHIFT: (state, payload) => {
      state.imageParams.shift.value = payload
    }
  },
  actions: {},
  modules: {}
})
