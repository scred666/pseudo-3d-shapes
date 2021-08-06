<template>
  <div class="color-switcher">
    <div class="color-switcher__title">color:</div>
    <div class="color-switcher__input-wrapper">
      <input type="color" class="input" :value="color" @change="handler" />
    </div>
  </div>
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
.color-switcher
  display: flex
  align-items: center
  &__title
    @extend %input-title
    z-index: 1
    +media((margin-right: (320: rem(5), 768: rem(10))))
  &__input-wrapper
    box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
    border-radius: rem(12)
    .input
      outline: none
      -webkit-appearance: none
      width: rem(24)
      height: rem(24)
      border-radius: rem(12)
      padding: rem(6)
      cursor: pointer
      box-shadow: inset rem(-1) rem(-1) rem(1) rgba($white, 0.7), inset rem(1) rem(1) rem(4) $grey
      border: none

      &::-webkit-color-swatch-wrapper
        padding: 0
        border-radius: rem(10)
        border: none
      &::-webkit-color-swatch
        border: none
        border-radius: rem(10)
</style>
