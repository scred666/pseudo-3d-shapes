<template>
  <div class="app-checkbox">
    <div class="app-checkbox__title" v-if="$slots.default">
      <slot />
    </div>
    <div class="app-checkbox__box">
      <input type="checkbox" v-model="computedVal" :id="id" class="input" hidden />
      <label class="label" :for="id"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCheckBox',
  props: {
    id: {
      type: String,
      required: true
    },
    val: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    computedVal: {
      get() {
        return this.val
      },
      set(val) {
        this.$emit('updateVal', val)
      }
    }
  }
}
</script>

<style scoped lang="sass">
.app-checkbox
  display: flex
  align-items: center
  &__box
    .input
      &:checked
        + .label
            &:after
              height: rem(16)
              width: rem(16)
              transform: translate(calc(200% - 6px), -50%)
              border-width: rem(6)
              background: $green
    .label
      cursor: pointer
      position: relative
      display: flex
      background: $semi-white
      box-shadow: rem(-1) rem(-1) rem(3) $white, rem(1.5) rem(1.5) rem(3) $grey
      border-radius: rem(12)
      height: rem(24)
      width: rem(48)
      &:before, &:after
        content: ""
        position: absolute
        top: 50%
      &:after
        background: $white
        width: rem(12)
        height: rem(12)
        box-shadow: 0 rem(1) rem(4) rgba($semi-white, .25), rem(2) rem(2) rem(3) $grey
        border-radius: 50%
        left: 0
        transform: translate(rem(6), -50%)
        transition: all .5s, border-width 0s, background 0s
        border: rem(2) solid $white
        box-sizing: border-box
      &:before
        content: ""
        height: calc(100% - 2px)
        width: calc(100% - 2px)
        position: absolute
        left: 50%
        transform: translate(-50%, -50%)
        background: $semi-white
        box-shadow: inset rem(-1) rem(-1) rem(1) rgba($white, 0.7), inset rem(1) rem(1) rem(2) $grey
        border-radius: rem(12)
</style>
