<template>
  <button class="app-button" @click="handle">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  methods: {
    handle() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="sass">
.app-button

  background: $semi-white
  border-radius: rem(16)
  width: 100%
  color: $green
  box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
  border: none
  outline: none
  cursor: pointer
  +media((font-size: (320: rem(14), 768: rem(16))))
  min-height: rem(40)
  font-family: $main-font
  font-weight: bold
  transition: .3s
  @media (any-hover: hover)
    &:hover
      box-shadow: inset rem(8) rem(8) rem(10) 0 rgba($grey, .5), inset rem(-8) rem(-8) rem(18) 0 rgba($white, .5)
      color: $light
</style>
