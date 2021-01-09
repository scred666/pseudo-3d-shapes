<template>
  <div class="shape-switcher">
    <my-radio
      v-for="type in types"
      :value="type"
      :checked="currentShape === type"
      :id="id"
      :key="type"
      @switchTo="selectNewShape"
    />
  </div>
</template>

<script>
import { types } from '@/utils/drawing'
import MyRadio from '@/components/MyRadio'

export default {
  name: 'ShapeSwitcher',
  props: {
    currentShape: {
      type: String,
      default: types.cube,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  },
  components: { MyRadio },
  methods: {
    selectNewShape(shape) {
      this.$emit('selectNewShape', shape)
    }
  },
  computed: {
    types: () => types
  }
}
</script>

<style scoped></style>
