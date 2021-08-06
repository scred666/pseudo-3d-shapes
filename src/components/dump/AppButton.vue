<template>
  <button :class="classes" @click="handle">
    <span class="app-button__icon" v-if="$slots.icon">
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
      validator: v => ['layer-control'].includes(v)
    }
  },
  methods: {
    handle() {
      this.$emit('click')
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
  }
}
</script>

<style scoped lang="sass">
.app-button

  background: $semi-white
  border-radius: rem(16)
  box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
  width: 100%
  color: $green

  border: none
  outline: none
  cursor: pointer
  +media((font-size: (320: rem(14), 768: rem(16))))
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
      box-shadow: inset rem(8) rem(8) rem(10) 0 rgba($grey, .5), inset rem(-8) rem(-8) rem(18) 0 rgba($white, .5)
      color: $light
  &--layer-control
    min-height: unset
    height: rem(40)
    width: rem(40)
    padding: 0
    border-radius: rem(4)
    display: flex
    justify-content: center
    align-items: center
    .app-button
      &__icon
        color: $green
        max-width: rem(24)
        svg
          max-width: 100%
          height: auto
</style>
