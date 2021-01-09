<template>
  <input type="color" class="color-input" :value="color" @change="handler" />
</template>

<script>
export default {
  name: 'ColorInput',
  props: {
    color: {
      type: String,
      default: '#41b883'
    }
  },
  methods: {
    handler(e) {
      this.$emit('updateColor', e.target.value)
    }
  }
  // computed: {
  //   computedColor: {
  //     get() {
  //       return this.color
  //     },
  //     set(val) {
  //       this.$emit('updateColor', val)
  //     }
  //   }
  // }
}
</script>

<style scoped lang="sass">
.color-input
  -webkit-appearance: none
  border: none
  width: 24px
  height: 24px
  border-radius: 50%
  padding: 0
  cursor: pointer
  &::-webkit-color-swatch-wrapper
    padding: 0
    border-radius: 50%
    border: none
  &::-webkit-color-swatch
    border: none
    border-radius: 50%
</style>
