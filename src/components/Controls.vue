<template>
  <div>
    <div v-for="(layer, i) in layers" :key="i">
      {{ layer.height }}
      <my-input :val="layer.height" @updateVal="updateHeight($event, i)"/>
      <button @click="updateLayerType(i)">qwe</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MyInput from '@/components/MyInput'

export default {
  name: 'Controls',
  components: {
    MyInput
  },
  methods: {
    ...mapMutations({
      UPDATE_LAYER_TYPE: 'UPDATE_LAYER_TYPE',
      UPDATE_LAYER_HEIGHT: 'UPDATE_LAYER_HEIGHT'
    }),
    updateHeight (val, index) {
      this.UPDATE_LAYER_HEIGHT({ index, val })
    },
    updateLayerType (index) {
      this.UPDATE_LAYER_TYPE({ index })
    }
  },
  computed: {
    ...mapState({
      layers: state => state.layers
    })
  }
}
</script>

<style scoped lang="sass">
  div
    color: #fff
</style>
