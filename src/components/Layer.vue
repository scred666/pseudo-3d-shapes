<template>
  <g>
    <Shape :path="layer.shape" :fill="fill"/>
    <Circuit :path="layer.circuit" />
    <Polygons>
      <template #polygon-top>
        <Shape :path="layer.polygonTop" fill="url(#polygon-top)"/>
      </template>
      <template #polygon-left>
        <Shape opacity="0.15" :path="layer.polygonRight" fill="white" />
      </template>
      <template #polygon-right>
        <Shape opacity="0.15" :path="layer.polygonLeft" fill="black" />
      </template>
    </Polygons>
  </g>
</template>

<script>
import Shape from '@/components/Shape'
import Circuit from '@/components/Circuit'
import Polygons from '@/components/Polygons'
export default {
  props: {
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
    Circuit,
    Polygons
  },
  name: 'Layer'
}
</script>

<style scoped lang="sass">
</style>
