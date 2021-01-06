<template>
  <input type="number" v-model.number="computedHeight" />
</template>

<script>
import { isValidNumber } from '@/utils'

export default {
  props: {
    val: {
      type: Number,
      default: 0,
      required: true
    }
  },
  name: 'MyInput',
  computed: {
    computedHeight: {
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

<style scoped></style>
