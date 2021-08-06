<template>
  <div class="controls">
    <app-button @click="addNewLayer"> {{ prependBtnText }} new layer </app-button>
    <draggable
      v-model="layersList"
      group="layers"
      @start="drag = true"
      @end="drag = false"
      animation="200"
      tag="div"
      handle=".handle"
      class="controls__items"
      v-if="isLayersExist"
    >
      <transition-group name="flip-list" tag="div" class="controls__items-list">
        <controls-layer
          v-for="layer in layersList"
          :layer="layer"
          :key="layer.id"
          @updateParam="updateParam"
          @removeLayer="removeLayer"
          @moveUp="moveUp"
          @moveDown="moveDown"
        />
      </transition-group>
    </draggable>
    <app-button @click="addNewLayer(true)" v-if="isLayersExist"> Append new layer </app-button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import AppButton from '@/components/dump/AppButton'
import ControlsLayer from '@/components/controls/ControlsLayer'

export default {
  props: {
    isLayersExist: {
      type: Boolean,
      required: true
    },
    layers: {
      type: Array,
      required: true
    }
  },
  name: 'Controls',
  data: () => ({
    drag: false
  }),
  components: {
    ControlsLayer,
    AppButton,
    draggable
  },
  methods: {
    updateParam(obj) {
      this.$emit('updateParam', obj)
    },
    addNewLayer(isAppend = false) {
      this.$emit('addNewLayer', isAppend)
    },
    removeLayer(layerId) {
      this.$emit('removeLayer', layerId)
    },
    moveDown(layerId) {
      this.$emit('moveDown', layerId)
    },
    moveUp(layerId) {
      this.$emit('moveUp', layerId)
    }
  },
  computed: {
    layersList: {
      get() {
        return this.layers
      },
      set(val) {
        this.$emit('updateLayersOrder', val)
      }
    },
    prependBtnText() {
      return this.isLayersExist ? 'Prepend' : 'Add'
    }
  }
}
</script>

<style scoped lang="sass">
.controls
  display: grid
  +media((gap: (320: rem(12), 768: rem(20))))
  +media((width: (320: 100%, 768: rem(300), 1024: rem(400))))
  &__items
    &-list
      display: grid
      +media((gap: (320: rem(12), 768: rem(20))))
      &::v-deep
        .item
          z-index: 1
          width: 100%
          background-color: $semi-white
          border-radius: rem(16)
          box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
          display: grid
          +media((grid-template-columns: (320: rem(15) 1fr, 768: rem(30) 1fr, 1024: rem(40) 1fr)))
          +media((padding: (320: rem(3) 0, 768: rem(12) 0)))
          +media((gap: (320: rem(6), 768: rem(10), 1024: rem(20))))
          .handle
            line-height: 0
            cursor: move
            +media((width: (320: rem(15), 768: rem(30), 1024: rem(40))))
            display: flex
            align-items: center
            img
              width: 50%
              height: auto
              margin: 0 auto
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
