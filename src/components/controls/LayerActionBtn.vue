<template>
  <button @click="handler" class="btn">
    <slot />
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
  background: $semi-white
  box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
  cursor: pointer
  line-height: 0
  border-radius: rem(4)
  +media((width: (320: rem(25), 768: rem(30))))
  +media((height: (320: rem(25), 768: rem(30))))
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
