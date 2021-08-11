<template>
  <div class="controls" :class="{ 'controls--full-width': !isLayersExist }">
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
    <app-button @click="addNewLayer(true)" v-if="isLayersExist" ref="append-btn">
      Append new layer
    </app-button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import AppButton from '@/components/dump/AppButton'
import ControlsLayer from '@/components/dump/ControlsLayer'

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
      if (isAppend) {
        this.$nextTick().then(() => {
          this.$refs['append-btn'].$refs.button.scrollIntoView()
        })
      }
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
  +media((gap: (0: rem(12), 768: rem(20))))
  max-width: rem(400)
  > .app-button
      min-width: rem(160)
  &__items
    &-list
      display: grid
      +media((gap: (0: rem(12), 768: rem(20))))
</style>
