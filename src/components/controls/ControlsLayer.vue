<template>
  <div class="item">
    <div class="handle">
      <img src="@/assets/img/drag.svg" alt="::" />
    </div>
    <div class="item__controls">
      <div class="item__controls-inputs">
        <my-input :val="layer.height" @updateVal="updateHeight"> height: </my-input>
        <color-input :color="layer.fill" @updateColor="updateColor" />
        <shape-switcher :currentShape="layer.type" :id="layer.id" @selectNewShape="updateType" />
      </div>
      <div class="item__controls-nav">
        <layer-action-btn @layerAction="moveUp">
          <img src="@/assets/img/up.svg" alt="↑" />
        </layer-action-btn>
        <layer-action-btn @layerAction="moveDown">
          <img src="@/assets/img/down.svg" alt="↓" />
        </layer-action-btn>
        <layer-action-btn @layerAction="removeLayer">
          <img src="@/assets/img/remove.svg" alt="x" />
        </layer-action-btn>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from '@/components/controls/MyInput'
import ColorInput from '@/components/controls/ColorInput'
import ShapeSwitcher from '@/components/ShapeSwitcher'
import LayerActionBtn from '@/components/controls/LayerActionBtn'
export default {
  props: {
    layer: {
      type: Object,
      required: true
    }
  },
  name: 'ControlsLayer',
  components: { LayerActionBtn, ShapeSwitcher, ColorInput, MyInput },
  methods: {
    updateHeight(val) {
      this.$emit('updateParam', { val, id: this.layer.id, param: 'height' })
    },
    updateType(val) {
      this.$emit('updateParam', { val, id: this.layer.id, param: 'type' })
    },
    updateColor(val) {
      this.$emit('updateParam', { val, id: this.layer.id, param: 'fill' })
    },
    removeLayer() {
      this.$emit('removeLayer', this.layer.id)
    },
    moveUp() {
      this.$emit('moveUp', this.layer.id)
    },
    moveDown() {
      this.$emit('moveDown', this.layer.id)
    }
  }
}
</script>

<style scoped></style>
