<template>
  <svg
    width="336"
    :height="totalHeight"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 336 ${totalHeight}`"
  >
    <Layer
      v-for="(layer, i) in reversedLayers"
      :type="layer.type"
      :key="i"
      :fill="layer.fill"
      :layer="getLayer(layer, i)"
    />
    <defs>
      <linearGradient id="polygon-top" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop stop-color="white" stop-opacity="0.7" />
        <stop offset="1" stop-color="white" stop-opacity="0.4" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { calculateStartPoints, drawLayer, getTotalHeight } from '@/utils/drawing'
import { mapState } from 'vuex'
import Layer from '@/components/Layer'

export default {
  name: 'Figure',
  components: {
    Layer
  },
  methods: {
    getLayer(layer, index) {
      return drawLayer(layer, this.startPoints[index])
    }
  },
  computed: {
    ...mapState({
      layers: state => state.layers,
      isShiftEnabled: state => state.imageParams.shift.isEnabled,
      figureShift: state => state.imageParams.shift.value
    }),
    reversedLayers() {
      return [...this.layers].reverse()
    },
    computedFigureShift() {
      return this.isShiftEnabled ? this.figureShift : 0
    },
    totalHeight() {
      return getTotalHeight(this.layers, this.computedFigureShift)
    },
    startPoints() {
      return calculateStartPoints(this.totalHeight, this.reversedLayers, this.computedFigureShift)
    }
  }
}
</script>

<style scoped lang="sass"></style>
