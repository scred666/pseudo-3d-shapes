<template>
  <button @click="handler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'LayerActionBtn',
  methods: {
    handler() {
      this.$emit('layerAction')
    }
  }
}
</script>

<style scoped></style>
