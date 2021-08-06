<template>
  <div class="input-wrapper">
    <div class="input-wrapper__title">
      <slot />
    </div>
    <input
      type="number"
      class="input-wrapper__input"
      v-model.number="computedVal"
      v-if="!isDisabled"
    />
    <div class="input-wrapper__plug" v-else>{{ computedVal }}</div>
  </div>
</template>

<script>
import { isValidNumber } from '@/utils'

export default {
  props: {
    val: {
      type: Number,
      required: true
    },
    isDisabled: {
      type: Boolean
    }
  },
  name: 'MyInput',
  computed: {
    computedVal: {
      get() {
        return this.val
      },
      set(val) {
        if (isValidNumber(val)) this.$emit('updateVal', val)
      }
    }
  }
}
</script>

<style scoped lang="sass">
.input-wrapper
  display: flex
  align-items: center
  &__title
    @extend %input-title
  &__input, &__plug
    font-family: $main-font
    color: $green
    background-color: $semi-white
    border-radius: rem(8)
    border: none
    font-size: rem(16)
    font-weight: bold
    box-shadow: inset rem(8) rem(8) rem(10) 0 rgba($grey, .5), inset rem(-8) rem(-8) rem(18) 0 rgba($white, .5)
    +media((width: (320: rem(40), 768: rem(68))))
    text-align: center
    text-overflow: ellipsis
    padding: 4px
    outline: none
  &__input
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
    -moz-appearance: textfield
</style>
