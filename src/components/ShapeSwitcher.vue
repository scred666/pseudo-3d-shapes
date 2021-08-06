<template>
  <div class="shape-switcher">
    <div class="shape-switcher__title">shape:</div>
    <div class="shape-switcher__controls">
      <my-radio
        v-for="type in types"
        :value="type"
        :checked="currentShape === type"
        :id="id"
        :key="type"
        @switchTo="selectNewShape"
      />
    </div>
  </div>
</template>

<script>
import { types } from '@/utils/drawing'
import MyRadio from '@/components/controls/MyRadio'

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

<style scoped lang="sass">
.shape-switcher
  display: flex
  align-items: center
  &__title
    @extend %input-title
  &__controls
    display: flex
    align-items: center
</style>
