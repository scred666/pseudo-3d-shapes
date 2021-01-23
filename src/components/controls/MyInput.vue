<template>
  <div class="input-wrapper">
    <div class="input-wrapper__title">
      <slot></slot>
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
      default: 0,
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
    background-color: $light
    border: none
    font-size: 16px
    font-weight: bold
    border-radius: 2px
    width: 68px
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
