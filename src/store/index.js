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
      fill: '#81cdc2',
      height: 100,
      type: 'cube',
      id: null
    },
    layers: [
      {
        id: 'wn2pf9ruh',
        fill: '#006f74',
        height: 160,
        type: 'pyramid'
      },
      {
        id: '5e5kvp9zq',
        fill: '#81cdc2',
        height: 100,
        type: 'cube'
      },
      {
        id: 'mafj776kg',
        fill: '#ffd79c',
        height: 50,
        type: 'cube'
      },
      {
        id: '9luxy76ua',
        fill: '#f38c76',
        height: 70,
        type: 'cube'
      },
      {
        id: 'egi0z6zdg',
        fill: '#f24e4a',
        height: 10,
        type: 'cube'
      },
      {
        id: 'kgl48aakt',
        fill: '#182e46',
        height: 40,
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
    ADD_NEW_LAYER: (state, isAppend) => {
      const newLayer = { ...state.defaultLayer }
      newLayer.id = getRandomId()
      isAppend ? state.layers.push(newLayer) : state.layers.unshift(newLayer)
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
