<template>
  <div class="switcher">
    <input type="checkbox" v-model="computedVal" id="checkbox" />
    <label for="checkbox"></label>
  </div>
</template>

<script>
export default {
  name: 'MyCheckbox',
  props: {
    val: {
      type: Boolean
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
  input[type="checkbox"]
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
          transform: translate(16px, -50%)
  label
    width: 36px
    height: 14px
    display: inline-flex
    background-color: rgba(#606060, .5)
    border-radius: 8px
    position: relative
    cursor: pointer
    &:after
      height: 20px
      width: 20px
      border-radius: 50%
      background-color: #909090
      content: ""
      position: absolute
      left: 0
      top: 50%
      transform: translate(0, -50%)
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6)
      transition: transform linear .08s, background-color linear .08s
</style>
