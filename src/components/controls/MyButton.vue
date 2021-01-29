<template>
  <button class="simple-btn" @click="handler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  methods: {
    handler() {
      this.$emit('btnClick')
    }
  }
}
</script>

<style scoped lang="sass">
.simple-btn
  background: $light
  border-radius: rem(4)
  width: 100%
  color: $green
  box-shadow: none
  border: none
  outline: none
  cursor: pointer
  +media((font-size: (320: rem(14), 768: rem(16))))
  min-height: rem(40)
  font-family: $main-font
  font-weight: bold
  transition: .5s
  @media (any-hover: hover)
    &:hover
      background: $green
      color: $light
</style>
