<template>
  <svg
    width="338"
    :height="totalHeight"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 336 ${totalHeight}`"
    class="figure"
  >
    <Layer
      v-for="layer in reversedLayers"
      :key="layer.id"
      :layer="layer"
      :start-point="startPoints[layer.id]"
    />
    <defs>
      <linearGradient id="polygon-top" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop stop-color="white" stop-opacity="0.35" />
        <stop offset="1" stop-color="white" stop-opacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { calculateStartPoints, getTotalHeight } from '@/utils/drawing'
import Layer from '@/components/figure/Layer'

export default {
  props: {
    layers: {
      type: Array,
      required: true
    },
    layersOffset: {
      type: Number,
      required: true
    },
    isOffsetEnabled: {
      type: Boolean,
      required: true
    }
  },
  name: 'Figure',
  components: {
    Layer
  },
  computed: {
    reversedLayers() {
      return [...this.layers].reverse()
    },
    computedFigureShift() {
      return this.isOffsetEnabled ? this.layersOffset : 0
    },
    totalHeight() {
      return getTotalHeight(this.layers, this.computedFigureShift)
    },
    startPoints() {
      const { totalHeight, reversedLayers, computedFigureShift } = this
      return calculateStartPoints(totalHeight, reversedLayers, computedFigureShift)
    }
  }
}
</script>

<style scoped lang="sass">
.figure
  max-width: 100%
  height: auto
  transition: .3s
</style>
