<template>
  <div class="shape-switcher">
    <app-radio-button
      v-for="shape in layerShapes"
      :name="`shape-switcher--${id}`"
      :key="shape"
      :value="shape"
      :current-value="currentShape"
      @switchTo="selectNewShape"
      :id="id"
    />
  </div>
</template>

<script>
import { layerShapes } from '@/utils/drawing'
import AppRadioButton from '@/components/dump/AppRadioButton'

export default {
  name: 'ShapeSwitcher',
  props: {
    currentShape: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  },
  components: { AppRadioButton },
  methods: {
    selectNewShape(shape) {
      this.$emit('selectNewShape', shape)
    }
  },
  computed: {
    layerShapes: () => layerShapes
  }
}
</script>

<style scoped lang="sass">
.shape-switcher
  display: flex
  align-items: center
  gap: rem(5)
</style>
