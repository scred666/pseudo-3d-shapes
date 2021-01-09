<template>
  <div>
    <input type="number" class="input" v-model.number="computedVal" v-if="!isDisabled" />
    <div class="input" v-else>{{ computedVal }}</div>
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

<style scoped></style>
