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
  gap: rem(10)
  &__wrapper
    @extend %default-outer-box-shadow
    +media((border-radius: (0: rem(12), 768: rem(16))))
  .input
    font-family: $main-font
    color: $blue
    border-radius: inherit
    border: none
    font-size: rem(16)
    font-weight: bold
    background: $semi-white
    @extend %input-inner-box-shadow
    +media((width: (0: rem(48), 768: rem(68))))
    text-align: center
    text-overflow: ellipsis
    box-sizing: border-box
    +media((padding: (0: rem(6), 768: rem(8) rem(10))))
    outline: none
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
      -moz-appearance: textfield
    &:disabled
      color: $black
</style>
