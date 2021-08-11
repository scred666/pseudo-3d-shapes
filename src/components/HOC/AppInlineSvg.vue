<template>
  <span class="svg-icon">
    <inline-svg v-bind="$attrs" v-on="$listeners" />
  </span>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
export default {
  name: 'AppInlineSvg',
  components: { InlineSvg }
}
</script>

<style scoped lang="sass">
.svg-icon
  display: flex
  justify-content: center
  align-items: center
  position: relative
  max-width: 100%
  svg
    width: 100%
    height: auto
</style>
