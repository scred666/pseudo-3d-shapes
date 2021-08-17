<template>
  <div class="controls" :class="{ 'controls--full-width': !isLayersExist }">
    <app-button @click="addNewLayer"> {{ prependBtnText }} new layer </app-button>
    <draggable
      v-if="isLayersExist"
      v-model="layersList"
      group="layers"
      animation="200"
      tag="div"
      handle=".handle"
      class="controls__items"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group name="flip-list" tag="div" class="controls__items-list">
        <controls-layer
          v-for="layer in layersList"
          :key="layer.id"
          :layer="layer"
          @updateParam="updateParam"
          @removeLayer="removeLayer"
          @moveUp="moveUp"
          @moveDown="moveDown"
        />
      </transition-group>
    </draggable>
    <app-button v-if="isLayersExist" ref="append-btn" @click="addNewLayer(true)">
      Append new layer
    </app-button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import AppButton from '@/components/dump/AppButton'
import ControlsLayer from '@/components/dump/ControlsLayer'

export default {
  name: 'Controls',
  components: {
    ControlsLayer,
    AppButton,
    draggable
  },
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
  data: () => ({
    drag: false
  }),
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
