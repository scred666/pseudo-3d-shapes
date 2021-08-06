<template>
  <section class="layout">
    <div class="layout__layers">
      <Controls
        :is-layers-exist="isLayersExist"
        :layers="layers"
        @updateLayersOrder="updateLayersOrder"
        @addNewLayer="addNewLayer"
        @updateParam="updateParam"
        @removeLayer="removeLayer"
        @moveUp="moveUp"
        @moveDown="moveDown"
      />
    </div>
    <div class="layout__figure" v-if="isLayersExist">
      <Figure :layers="layers" :layers-offset="layersOffset" :is-offset-enabled="isOffsetEnabled" />
    </div>
    <div class="layout__offset" v-if="isLayersExist">
      <ShiftControls
        :layers-offset="layersOffset"
        :is-offset-enabled="isOffsetEnabled"
        @toggleLayersOffset="toggleLayersOffset"
        @updateLayersOffset="updateLayersOffset"
      />
    </div>
  </section>
</template>

<script>
import Figure from '@/components/Figure'
import Controls from '@/components/Controls'
import ShiftControls from '@/components/ShiftControls'
import { clone } from 'ramda'
import { defaultLayer, initialLayers } from '@/utils/drawing'
import { getRandomId } from '@/utils'

const directions = {
  down: 'down',
  up: 'up'
}
export default {
  name: 'Layout',
  data: () => ({
    layers: clone(initialLayers),
    layersOffset: 6,
    isOffsetEnabled: true
  }),
  components: {
    ShiftControls,
    Figure,
    Controls
  },
  methods: {
    updateLayersOrder(layers) {
      this.layers = layers
    },
    addNewLayer(isAppend = false) {
      const newLayer = {
        ...defaultLayer,
        id: getRandomId()
      }
      isAppend ? this.layers.push(newLayer) : this.layers.unshift(newLayer)
    },
    updateParam(obj) {
      const { val, id, param } = obj
      this.layers.find(layer => layer.id === id)[param] = val
    },
    removeLayer(layerId) {
      this.layers = this.layers.filter(layer => layer.id !== layerId)
    },
    moveDown(layerId) {
      const layers = clone(this.layers)
      const index = this.findLayerIndexById(layerId)
      const isLastLayer = index !== layers.length - 1
      isLastLayer
        ? this.swapLayers(directions.down, layers, index)
        : layers.unshift(...layers.splice(index, 1))
      this.updateLayersOrder(layers)
    },
    moveUp(layerId) {
      const layers = clone(this.layers)
      const index = this.findLayerIndexById(layerId)
      const isFirstLayer = index === 0
      isFirstLayer
        ? layers.push(...layers.splice(index, 1))
        : this.swapLayers(directions.up, layers, index)
      this.updateLayersOrder(layers)
    },
    findLayerIndexById(layerId) {
      return this.layers.findIndex(layer => layer.id === layerId)
    },
    swapLayers(direction, layers, index) {
      const indexToSwap = direction === directions.down ? index + 1 : index - 1
      return ([layers[index], layers[indexToSwap]] = [layers[indexToSwap], layers[index]])
    },
    toggleLayersOffset(val) {
      this.isOffsetEnabled = val
    },
    updateLayersOffset(val) {
      this.layersOffset = val
    }
  },
  computed: {
    isLayersExist() {
      return !!this.layers.length
    }
  }
}
</script>

<style scoped lang="sass">
.layout
  +media((padding: (320: rem(20) 0, 768: rem(40) 0)))
  max-width: rem(1200)
  width: 90vw
  margin: 0 auto
  +media((display: (320: grid, 1024: flex)))
  +media((justify-content: (1024: space-between)))
  $t-s: 11fr 9fr
  $t-m: rem(224) 1fr
  $t-l: rem(300) 1fr
  +media((grid-template-columns: (320: $t-s, 480: $t-m, 768: $t-l, 1024: unset)))
  +media((gap: (320: rem(12) 5vw, 1024: unset)))
  align-items: flex-start
  &__layers, &__offset, &__figure
    position: sticky
    top: rem(20)
  &__offset
    min-width: rem(125)
    +media((grid-area: (320: '1 / 1 / 2 / 2', 1024: unset)))
    +media((padding: (1024: rem(40))))
    background: $semi-white
    border-radius: rem(16)
    box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
  &__layers
    +media((grid-column-start: (320: 1, 1024: unset)))
  &__figure
    +media((padding: (1024: rem(40))))
    background: $semi-white
    border-radius: rem(36)
    box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
</style>
