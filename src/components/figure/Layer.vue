<template>
  <g class="layer">
    <Shape :path="layerForDraw.shape" :fill="layer.fill" class="layer__shape" />
    <Polygons>
      <template>
        <Shape
          :path="layerForDraw.decor.polygonTop"
          fill="url(#polygon-top)"
          v-if="layerForDraw.decor.polygonTop"
        />
        <Shape
          opacity="0.15"
          :path="layerForDraw.decor.polygonLeft"
          fill="white"
          v-if="layerForDraw.decor.polygonLeft"
        />
        <Shape
          opacity="0.15"
          :path="layerForDraw.decor.polygonRight"
          fill="black"
          v-if="layerForDraw.decor.polygonRight"
        />
        <Shape
          opacity="0.3"
          :path="layerForDraw.decor.polygonRightTop"
          fill="black"
          v-if="layerForDraw.decor.polygonRightTop"
        />
      </template>
    </Polygons>
    <Shape
      :path="layerForDraw.decor.circuit"
      v-if="layerForDraw.decor.circuit"
      class="layer__circuit"
      fill="none"
      stroke="#000"
      stroke-opacity="1"
      stroke-width="1"
    />
  </g>
</template>

<script>
import Shape from '@/components/figure/Shape'
import Polygons from '@/components/figure/Polygons'
import { drawLayer } from '@/utils/drawing'

export default {
  props: {
    layer: {
      type: Object,
      required: true
    },
    startPoint: {
      type: Number,
      required: true
    }
  },
  components: {
    Shape,
    Polygons
  },
  name: 'Layer',
  computed: {
    layerForDraw() {
      return drawLayer(this.layer, this.startPoint)
    }
  }
}
</script>

<style scoped lang="sass"></style>
