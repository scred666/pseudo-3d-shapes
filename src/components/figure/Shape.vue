<template>
  <path :d="path" :fill="fill" class="shape" />
</template>

<script>
export default {
  props: {
    path: {
      type: String
    },
    fill: {
      type: String,
      default: '#41b883'
    }
  },
  name: 'Shape'
}
</script>

<style scoped lang="sass">
.shape
  transition: .3s
</style>
