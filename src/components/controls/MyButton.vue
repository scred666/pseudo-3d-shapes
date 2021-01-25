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
  border-radius: 4px
  width: 100%
  color: $green
  box-shadow: none
  border: none
  outline: none
  cursor: pointer
  +media((font-size: (320: 14px, 768: 16px)))
  min-height: 40px
  font-family: $main-font
  font-weight: bold
  transition: .5s
  @media (any-hover: hover)
    &:hover
      background: $green
      color: $light
</style>
