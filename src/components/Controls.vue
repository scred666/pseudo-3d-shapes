<template>
  <div class="controls">
    <draggable
      v-model="layersList"
      group="layers"
      @start="drag = true"
      @end="drag = false"
      animation="200"
      tag="div"
      handle=".handle"
      class="controls__items"
    >
      <transition-group name="flip-list">
        <div v-for="(layer, i) in layersList" :key="layer.id" class="controls__items-single">
          <div class="handle">bla</div>
          <my-input :val="layer.height" @updateVal="updateHeight($event, i)" />
          <div class="nav">
            <layer-action-btn @layerAction="moveUp(i)"> ↑ </layer-action-btn>
            <layer-action-btn @layerAction="moveDown(i)"> ↓ </layer-action-btn>
            <layer-action-btn @layerAction="removeLayer(i)"> x </layer-action-btn>
          </div>
          <color-input :color="layer.fill" @updateColor="updateColor($event, i)" />
          <shape-switcher
            :currentShape="layer.type"
            :id="layer.id"
            @selectNewShape="updateType($event, i)"
          />
        </div>
      </transition-group>
    </draggable>
    <button @click="addNewLayer">add</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { clone } from 'ramda'
import draggable from 'vuedraggable'
import MyInput from '@/components/controls/MyInput'
import LayerActionBtn from '@/components/controls/LayerActionBtn'
import ColorInput from '@/components/controls/ColorInput'
import ShapeSwitcher from '@/components/ShapeSwitcher'

export default {
  name: 'Controls',
  data() {
    return {
      drag: false
    }
  },
  components: {
    ShapeSwitcher,
    ColorInput,
    LayerActionBtn,
    draggable,
    MyInput
  },
  methods: {
    ...mapMutations({
      UPDATE_LAYERS_ORDER: 'UPDATE_LAYERS_ORDER',
      ADD_NEW_LAYER: 'ADD_NEW_LAYER',
      REMOVE_LAYER: 'REMOVE_LAYER',
      UPDATE_LAYER_PARAM: 'UPDATE_LAYER_PARAM'
    }),
    updateHeight(val, index) {
      this.UPDATE_LAYER_PARAM({
        index,
        param: 'height',
        val
      })
    },
    updateType(val, index) {
      this.UPDATE_LAYER_PARAM({
        index,
        param: 'type',
        val
      })
    },
    addNewLayer() {
      this.ADD_NEW_LAYER()
    },
    removeLayer(index) {
      this.REMOVE_LAYER(index)
    },
    moveDown(index) {
      const arr = clone(this.layersList)
      index !== arr.length - 1
        ? ([arr[index], arr[index + 1]] = [arr[index + 1], arr[index]])
        : arr.unshift(...arr.splice(index, 1))
      this.UPDATE_LAYERS_ORDER(arr)
    },
    moveUp(index) {
      const arr = clone(this.layersList)
      index !== 0
        ? ([arr[index], arr[index - 1]] = [arr[index - 1], arr[index]])
        : arr.push(...arr.splice(index, 1))
      this.UPDATE_LAYERS_ORDER(arr)
    },
    updateColor(val, index) {
      this.UPDATE_LAYER_PARAM({
        index,
        param: 'fill',
        val
      })
    }
  },
  computed: {
    ...mapState({
      layers: state => state.layers
    }),
    layersList: {
      get() {
        return this.layers
      },
      set(value) {
        this.UPDATE_LAYERS_ORDER(value)
      }
    }
  }
}
</script>

<style scoped lang="sass">
div
  color: #fff
</style>
