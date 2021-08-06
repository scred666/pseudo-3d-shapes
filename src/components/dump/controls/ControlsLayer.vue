<template>
  <div class="layer">
    <div class="handle">
      <div class="handle__icon">
        <inline-svg :src="require('@/assets/img/drag.svg')" />
      </div>
    </div>
    <div class="layer__controls">
      <div class="item__controls-inputs">
        <app-input
          :val="layer.height"
          :id="`${layer.id}-height`"
          @updateVal="updateLayerParam($event, layerParams.height)"
        >
          height:
        </app-input>
        <color-input
          :color="layer.fill"
          @updateColor="updateLayerParam($event, layerParams.fill)"
        />
        <shape-switcher
          :currentShape="layer.type"
          :id="layer.id"
          @selectNewShape="updateLayerParam($event, layerParams.type)"
        />
      </div>
      <div class="layer__controls-nav">
        <app-button
          mod="layer-control"
          v-for="button in actionButtons"
          :key="button.action"
          @click="handleAction(button.action)"
        >
          <template #icon>
            <inline-svg :src="button.image" />
          </template>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import ColorInput from '@/components/dump/controls/ColorInput'
import ShapeSwitcher from '@/components/ShapeSwitcher'
import { layerParams } from '@/utils/drawing'
import AppButton from '@/components/dump/AppButton'
import AppInput from '@/components/dump/AppInput'

const actionButtons = [
  {
    action: 'moveUp',
    image: require('@/assets/img/up.svg')
  },
  {
    action: 'moveDown',
    image: require('@/assets/img/down.svg')
  },
  {
    action: 'removeLayer',
    image: require('@/assets/img/remove.svg')
  }
]
export default {
  props: {
    layer: {
      type: Object,
      required: true
    }
  },
  name: 'ControlsLayer',
  components: { AppInput, AppButton, ShapeSwitcher, ColorInput, InlineSvg },
  methods: {
    updateLayerParam(val, param) {
      this.$emit('updateParam', { val, id: this.layer.id, param })
    },
    handleAction(action) {
      this.$emit(action, this.layer.id)
    }
  },
  computed: {
    actionButtons: () => actionButtons,
    layerParams: () => layerParams
  }
}
</script>

<style scoped lang="sass">
.layer
  z-index: 1
  width: 100%
  background-color: $semi-white
  border-radius: rem(16)
  box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
  display: grid
  +media((grid-template-columns: (320: rem(15) 1fr, 768: rem(30) 1fr, 1024: rem(60) 1fr)))
  +media((padding: (320: rem(3) 0, 768: rem(12) 0)))
  +media((gap: (320: rem(6), 768: rem(10))))
  .handle
    line-height: 0
    cursor: move
    +media((width: (320: rem(15), 768: rem(30), 1024: 100%)))
    display: flex
    align-items: center
    color: $green
    justify-content: center
    &__icon
      max-width: 60%
      svg
        max-width: 100%
        height: auto

  &__controls
    display: flex
    align-items: center
    justify-content: space-between
    &-inputs
      display: grid
      grid-auto-columns: 1fr
      +media((gap: (320: rem(6), 768: rem(12))))
      +media((min-width: (1024: 240px)))
    &-nav
      // +media((box-shadow: (768: inset rem(1) 0 0 $green)))
      +media((padding: (320: 0 rem(6), 768: 0 rem(10), 1024: 0 rem(20))))
      display: grid
      grid-auto-columns: 1fr
      grid-row-gap: rem(4)
</style>
