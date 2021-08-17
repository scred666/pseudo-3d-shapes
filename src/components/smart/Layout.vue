<template>
  <section class="layout">
    <div class="layout__title">
      <common-text type="title"> Pseudo 3D shapes </common-text>
    </div>
    <div class="layout__content">
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
      <div v-if="isLayersExist" class="layout__figure">
        <Figure
          :layers="layers"
          :layers-offset="layersOffset"
          :is-offset-enabled="isOffsetEnabled"
        />
      </div>
      <MatchMedia v-if="isLayersExist" v-slot="{ matches }" query="(max-width: 1023px)">
        <component
          :is="matches ? 'tippy' : 'div'"
          trigger="click"
          append-to="parent"
          class="layout__offset"
          placement="bottom-end"
          interactive
        >
          <template #trigger>
            <app-inline-svg :src="require('@/assets/img/cog.svg')" />
          </template>

          <offset-controls
            :layers-offset="layersOffset"
            :is-offset-enabled="isOffsetEnabled"
            @toggleLayersOffset="toggleLayersOffset"
            @updateLayersOffset="updateLayersOffset"
          />
        </component>
      </MatchMedia>
    </div>
  </section>
</template>

<script>
import { MatchMedia } from 'vue-component-media-queries'
import Figure from '@/components/smart/Figure'
import Controls from '@/components/smart/Controls'
import { clone } from 'ramda'
import { defaultLayer, initialLayers, layerParams, generateRandomHEX } from '@/utils/drawing'
import { getRandomId } from '@/utils'
import OffsetControls from '@/components/smart/OffsetControls'
import CommonText from '@/components/dump/CommonText'
import AppInlineSvg from '@/components/HOC/AppInlineSvg'

const directions = {
  down: 'down',
  up: 'up'
}
export default {
  name: 'Layout',
  components: {
    AppInlineSvg,
    CommonText,
    OffsetControls,
    Figure,
    Controls,
    MatchMedia
  },
  data: () => ({
    layers: clone(initialLayers),
    layersOffset: 6,
    isOffsetEnabled: true
  }),
  computed: {
    isLayersExist() {
      return !!this.layers.length
    }
  },
  methods: {
    updateLayersOrder(layers) {
      this.layers = layers
    },
    addNewLayer(isAppend = false) {
      const newLayer = {
        ...defaultLayer,
        [layerParams.id]: getRandomId(),
        [layerParams.fill]: generateRandomHEX()
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
  }
}
</script>

<style scoped lang="sass">
.layout
  +media((padding: (0: rem(20) 0, 768: rem(40) 0)))
  max-width: rem(1200)
  width: 90vw
  margin: 0 auto

  // +media((display: (320: grid, 1024: flex)))
  // +media((justify-content: (1024: space-between)))
  // $t-s: 11fr 9fr
  // $t-m: rem(224) 1fr
  // $t-l: rem(300) 1fr
  // +media((grid-template-columns: (320: $t-s, 480: $t-m, 768: $t-l, 1024: unset)))
  // +media((gap: (320: rem(12) 5vw, 1024: unset)))
  &__content
    display: flex
    justify-content: space-between
    align-items: flex-start
    +media((display: (0: grid, 768: flex)))
    grid-template-columns: auto 1fr
    +media((gap: (0: rem(12), 360: rem(16), 768: rem(20), 992: rem(60))))
    &::v-deep
      .tippy-tooltip
        padding: 0
        @extend %default-outer-box-shadow
        .tippy-backdrop
          background: none

  &__layers, &__figure
    position: sticky
    top: rem(20)
  &__offset
    +media((grid-area: (0: '1 / 1 / 2 / 3', 768: unset)))
    +media((position: (1024: sticky)))
    +media((top: (1024: rem(20))))
    min-width: rem(30)
    color: $blue
    display: flex
    justify-content: flex-end
    flex: 0 0 auto
    // margin-left: auto
    .svg-icon
      max-width: rem(30)
  // &__layers
    // +media((grid-column-start: (320: 1, 1024: unset)))
  &__figure
    +media((padding: (0: rem(10), 400: rem(20), 768: rem(30), 1024: rem(40))))
    background: $semi-white
    +media((border-radius: (0: rem(16), 768: rem(36))))
    @extend %default-outer-box-shadow
</style>
