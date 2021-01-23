<template>
  <div class="controls">
    <button @click="addNewLayer">add</button>
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
      <transition-group name="flip-list" tag="div" class="controls__items-list">
        <div v-for="(layer, i) in layersList" :key="layer.id" class="item">
          <div class="handle">
            <img src="@/assets/img/drag.svg" alt="::" />
          </div>
          <div class="item__controls">
            <div class="item__controls-inputs">
              <my-input :val="layer.height" @updateVal="updateHeight($event, i)">
                enter height:
              </my-input>
              <color-input :color="layer.fill" @updateColor="updateColor($event, i)" />
              <shape-switcher
                :currentShape="layer.type"
                :id="layer.id"
                @selectNewShape="updateType($event, i)"
              />
            </div>
            <div class="item__controls-nav">
              <layer-action-btn @layerAction="moveUp(i)">
                <img src="@/assets/img/up.svg" alt="↑" />
              </layer-action-btn>
              <layer-action-btn @layerAction="moveDown(i)">
                <img src="@/assets/img/down.svg" alt="↓" />
              </layer-action-btn>
              <layer-action-btn @layerAction="removeLayer(i)">
                <img src="@/assets/img/remove.svg" alt="x" />
              </layer-action-btn>
            </div>
          </div>
        </div>
      </transition-group>
    </draggable>
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
.controls
  &__items
    &-list
      display: grid
      grid-row-gap: 20px
      .item
        width: 400px
        background-color: #323a47
        border-radius: 4px
        display: grid
        grid-template-columns: 40px 1fr
        padding: 12px 0
        gap: 20px
        .handle
          line-height: 0
          cursor: move
          width: 40px
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
            gap: 12px
            min-width: 240px
          &-nav
            box-shadow: inset 1px 0 0 $green
            padding: 0 20px
            display: grid
            grid-auto-columns: 1fr
            grid-row-gap: 4px
</style>
