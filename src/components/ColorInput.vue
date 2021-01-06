<template>
  <input type="color" :value="color" @change="handler" />
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

<style scoped></style>
