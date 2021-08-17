<template>
  <div class="shape-switcher">
    <app-radio-button
      v-for="shape in layerShapes"
      :id="id"
      :key="shape"
      :name="`shape-switcher--${id}`"
      :value="shape"
      :current-value="currentShape"
      @switchTo="selectNewShape"
    />
  </div>
</template>

<script>
import { layerShapes } from '@/utils/drawing'
import AppRadioButton from '@/components/dump/AppRadioButton'

export default {
  name: 'ShapeSwitcher',
  components: { AppRadioButton },
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
  computed: {
    layerShapes: () => layerShapes
  },
  methods: {
    selectNewShape(shape) {
      this.$emit('selectNewShape', shape)
    }
  }
}
</script>

<style scoped lang="sass">
.shape-switcher
  display: flex
  align-items: center
  gap: rem(5)
</style>
