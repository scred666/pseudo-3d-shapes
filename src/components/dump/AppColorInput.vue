<template>
  <div class="color-switcher">
    <div class="color-switcher__title" v-if="$slots.default">
      <slot />
    </div>
    <div class="color-switcher__input-wrapper">
      <input type="color" class="input" :value="color" @input="handler" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppColorInput',
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
  gap: rem(10)
  &__input-wrapper
    @extend %default-outer-box-shadow
    border-radius: rem(12)
    .input
      outline: none
      -webkit-appearance: none
      width: rem(24)
      height: rem(24)
      border-radius: rem(12)
      padding: rem(6)
      @extend %input-inner-box-shadow
      cursor: pointer
      border: none

      &::-webkit-color-swatch-wrapper
        padding: 0
        border-radius: rem(10)
        border: none
      &::-webkit-color-swatch
        border: none
        border-radius: rem(10)
</style>
