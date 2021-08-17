<template>
  <button ref="button" :class="classes" @click="handle">
    <span v-if="$slots.icon" class="app-button__icon">
      <slot name="icon" />
    </span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    mod: {
      type: String,
      default: null,
      validator: v => ['layer-control'].includes(v)
    }
  },
  computed: {
    classes() {
      const { mod } = this
      return {
        'app-button': true,
        [`app-button--${mod}`]: mod
      }
    }
  },
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
  @extend %default-outer-box-shadow
  width: 100%
  color: $blue

  border: none
  outline: none
  cursor: pointer
  +media((font-size: (0: rem(14), 768: rem(16))))
  min-height: rem(40)
  font-family: $main-font
  font-weight: bold
  transition: .3s
  &__icon
    display: flex
    img
      max-width: 100%
  @media (any-hover: hover)
    &:hover
      box-shadow: $default-inner-box-shadow
      color: $light
  &--layer-control
    min-height: unset
    +media((width: (0: rem(25), 576: rem(30), 768: rem(40))))
    +media((height: (0: rem(25), 576: rem(30), 768: rem(40))))
    padding: 0
    border-radius: rem(4)
    display: flex
    justify-content: center
    align-items: center
    .app-button
      &__icon
        color: $blue
        max-width: rem(24)
        width: 80%
        svg
          max-width: 100%
          height: auto
</style>
