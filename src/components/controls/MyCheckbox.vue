<template>
  <div class="switcher">
    <div class="switcher__title">
      {{ label }}
    </div>
    <div class="switcher__box">
      <input type="checkbox" v-model="computedVal" id="checkbox" class="switcher__box-input" />
      <label for="checkbox" class="switcher__box-toggler"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCheckbox',
  props: {
    val: {
      type: Boolean
    },
    label: {
      type: String,
      default: null,
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
.switcher
  display: flex
  align-items: center
  justify-content: space-between
  &__title
    @extend %input-title
  &__box
    display: flex
    align-items: center
    min-height: rem(20)
    &-input
      display: none
      pointer-events: none
      position: absolute
      opacity: 0
      height: 0
      width: 0
      &:checked
        + label
          background-color: rgba(#606060, .4)
          &:after
            background-color: $green
            transform: translate(rem(16), -50%)
  &__box
    &-toggler
      width: rem(36)
      height: rem(14)
      display: inline-flex
      background-color: rgba(#606060, .5)
      border-radius: rem(8)
      position: relative
      cursor: pointer
      &:after
        height: rem(20)
        width: rem(20)
        border-radius: 50%
        background-color: #909090
        content: ""
        position: absolute
        left: 0
        top: 50%
        transform: translate(0, -50%)
        box-shadow: 0 rem(1) rem(5) 0 rgba(0, 0, 0, 0.6)
        transition: transform linear .08s, background-color linear .08s
</style>
