<template>
  <div class="app-input">
    <label class="label" v-if="$slots.default" :for="id">
      <slot />
    </label>
    <div class="app-input__wrapper">
      <input
        type="number"
        class="input"
        :id="id"
        v-model.number="computedVal"
        :disabled="isDisabled"
      />
    </div>
  </div>
</template>

<script>
import { isValidNumber } from '@/utils'

export default {
  name: 'AppInput',
  props: {
    val: {
      type: Number,
      required: true
    },
    isDisabled: {
      type: Boolean
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    computedVal: {
      get() {
        return this.val
      },
      set(val) {
        if (!this.isDisabled && isValidNumber(val)) {
          this.$emit('updateVal', val)
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">
.app-input
  display: flex
  align-items: center
  .label
    @extend %input-title
    z-index: 1
    +media((margin-right: (320: rem(5), 768: rem(10))))
  &__wrapper
    box-shadow: rem(8) rem(8) rem(18) $grey, rem(-8) rem(-8) rem(18) $white
    border-radius: rem(16)
  .input
    font-family: $main-font
    color: $green
    border-radius: inherit
    border: none
    font-size: rem(16)
    font-weight: bold
    background: $semi-white
    box-shadow: inset rem(-1) rem(-1) rem(1) rgba($white, 0.7), inset rem(1) rem(1) rem(2) $grey
    +media((width: (320: rem(40), 768: rem(68))))
    text-align: center
    text-overflow: ellipsis
    box-sizing: border-box
    padding: rem(8) rem(10)
    outline: none
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
      -moz-appearance: textfield
    &:disabled
      color: $black
</style>
