<template>
  <path :d="path"
        fill="none"
        stroke="#fff"
        stroke-opacity="0.4"
        stroke-width="2"/>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    }
  },
  name: 'Circuit'
}
</script>

<style scoped>

</style>
