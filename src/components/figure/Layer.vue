<template>
  <g class="layer">
    <Shape :path="layer.shape" :fill="fill" class="layer__shape" />
    <Polygons>
      <template>
        <Shape
          :path="layer.decor.polygonTop"
          fill="url(#polygon-top)"
          v-if="layer.decor.polygonTop"
        />
        <Shape
          opacity="0.3"
          :path="layer.decor.polygonLeft"
          fill="white"
          v-if="layer.decor.polygonLeft"
        />
        <Shape
          opacity="0.3"
          :path="layer.decor.polygonRight"
          fill="black"
          v-if="layer.decor.polygonRight"
        />
        <Shape
          opacity="0.6"
          :path="layer.decor.polygonRightTop"
          fill="black"
          v-if="layer.decor.polygonRightTop"
        />
      </template>
    </Polygons>
    <Shape
      :path="layer.decor.circuit"
      v-if="layer.decor.circuit"
      class="layer__circuit"
      fill="none"
      stroke="#fff"
      stroke-opacity="0.4"
      stroke-width="2"
    />
  </g>
</template>

<script>
import Shape from '@/components/figure/Shape'
import Polygons from '@/components/figure/Polygons'

export default {
  props: {
    type: {
      type: String
    },
    fill: {
      type: String,
      default: '#F4E23F'
    },
    layer: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Shape,
    Polygons
  },
  name: 'Layer',
  computed: {}
}
</script>

<style scoped lang="sass"></style>
