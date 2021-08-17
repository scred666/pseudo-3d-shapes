<template>
  <div class="app-radio-button">
    <input
      :id="`${id}-${value}`"
      v-model="computedValue"
      class="input"
      type="radio"
      :value="value"
      :name="name"
      hidden
    />
    <label :for="`${id}-${value}`" class="label">
      <app-inline-svg :src="images[value]" />
    </label>
  </div>
</template>

<script>
import { layerShapes } from '@/utils/drawing'

import AppInlineSvg from '@/components/HOC/AppInlineSvg'

const shapesList = Object.values(layerShapes)

const images = {
  [layerShapes.cube]: require('@/assets/img/cube.svg'),
  [layerShapes.pyramid]: require('@/assets/img/pyramid.svg')
}

export default {
  name: 'AppRadioButton',
  components: {
    AppInlineSvg
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
      validator: v => shapesList.includes(v)
    },
    currentValue: {
      type: String,
      required: true,
      validator: v => shapesList.includes(v)
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.currentValue
      },
      set(val) {
        this.$emit('switchTo', val)
      }
    },
    images: () => images
  }
}
</script>

<style scoped lang="sass">
.app-radio-button
  .input
    &:checked
      + .label
          color: $blue
          &:before
            opacity: 1
  .label
    color: $black
    cursor: pointer
    +media((width: (0: rem(40), 768: rem(50))))
    +media((height: (0: rem(40), 768: rem(50))))
    display: flex
    justify-content: center
    align-items: center
    @extend %default-outer-box-shadow
    border-radius: rem(12)
    position: relative
    transition: .3s
    &:before
      content: ""
      height: calc(100% - 2px)
      width: calc(100% - 2px)
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      background: $semi-white
      @extend %input-inner-box-shadow
      border-radius: rem(12)
      pointer-events: none
      opacity: 0
      transition: .3s
    .svg-icon
      max-width: 80%
      position: relative
      z-index: 1
      height: auto
</style>
