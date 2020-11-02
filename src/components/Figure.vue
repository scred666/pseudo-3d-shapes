<template>
  <svg width="336"
       :height="totalHeight"
       xmlns="http://www.w3.org/2000/svg"
       :viewBox="`0 0 336 ${totalHeight}`">
    <Layer v-for="(layer, i) in reversedLayers" :key="i" :fill="layer.fill" :layer="getLayer(layer)" />
    <defs>
      <linearGradient id="polygon-top" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop stop-color="white" stop-opacity="0.7"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0.4"></stop>
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { getTotalHeight, drawLayer, rhombusHeight } from '@/ultils/drawing'
import { mapState } from 'vuex'
import Layer from '@/components/Layer'
export default {
  name: 'Figure',
  components: {
    Layer
  },
  methods: {
    getLayer (layer) {
      return drawLayer(layer, this.startPoint(layer.height))
    }
    // getHexagon (layer) {
    //   return drawHexagon(layer, this.startPoint(layer.height))
    // },
    // getCircuit (layer) {
    //   return drawHexagon2(layer, this.startPoint(layer.height))
    // }
  },
  computed: {
    ...mapState({
      layers: state => state.layers
    }),
    reversedLayers () {
      return [...this.layers].reverse()
    },
    totalHeight () {
      return getTotalHeight(this.layers)
    },
    startPoint () {
      return (function (totalHeight) {
        return function (layerHeight) {
          return (totalHeight -= layerHeight) - rhombusHeight
        }
      }(this.totalHeight))
    }
  }
}
</script>

<style scoped lang="sass">
</style>
