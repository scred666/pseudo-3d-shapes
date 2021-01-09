<template>
  <div>
    <input
      type="radio"
      :value="value"
      :checked="checked"
      :id="`${id}-${value}`"
      :name="`shapeSwitcher-${id}`"
      @change="handler"
    />
    <label :for="`${id}-${value}`">
      {{ value }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'MyRadio',
  props: {
    value: {
      type: String,
      default: 'cube'
    },
    checked: {
      type: Boolean
    },
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    handler() {
      this.$emit('switchTo', this.value)
    }
  }
}
</script>

<style scoped></style>
