<template>
  <g class="layer">
    <Shape :path="layerForDraw.shape" :fill="layer.fill" class="layer__shape" />
    <Polygons>
      <template>
        <Shape
          v-if="layerForDraw.decor.polygonTop"
          :path="layerForDraw.decor.polygonTop"
          fill="url(#polygon-top)"
        />
        <Shape
          v-if="layerForDraw.decor.polygonLeft"
          opacity="0.15"
          :path="layerForDraw.decor.polygonLeft"
          fill="white"
        />
        <Shape
          v-if="layerForDraw.decor.polygonRight"
          opacity="0.15"
          :path="layerForDraw.decor.polygonRight"
          fill="black"
        />
        <Shape
          v-if="layerForDraw.decor.polygonRightTop"
          opacity="0.3"
          :path="layerForDraw.decor.polygonRightTop"
          fill="black"
        />
      </template>
    </Polygons>
    <Shape
      v-if="layerForDraw.decor.circuit"
      :path="layerForDraw.decor.circuit"
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
  name: 'Layer',
  components: {
    Shape,
    Polygons
  },
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
  computed: {
    layerForDraw() {
      return drawLayer(this.layer, this.startPoint)
    }
  }
}
</script>

<style scoped lang="sass"></style>
