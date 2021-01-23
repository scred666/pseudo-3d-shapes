<template>
  <button @click="handler" class="btn">
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

<style scoped lang="sass">
.btn
  padding: 0
  margin: 0
  border: none
  outline: none
  background: $light
  cursor: pointer
  line-height: 0
  border-radius: 4px
  width: 30px
  height: 30px
  display: flex
  justify-content: center
  align-items: center
  // transition: .5s
  img
    width: 80%
    height: 80%
    // transition: .5s
    filter: $filter-green
  @media(any-hover: hover)
    &:hover
      background: $green
      img
        filter: $filter-black
</style>
