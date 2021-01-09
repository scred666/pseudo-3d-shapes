<template>
  <section class="layout">
    <Controls />
    <Figure />
    <ShiftControls />
  </section>
</template>

<script>
import Figure from '@/components/Figure'
import Controls from '@/components/Controls'
import ShiftControls from '@/components/ShiftControls'
export default {
  name: 'Layout',
  components: {
    ShiftControls,
    Figure,
    Controls
  }
}
</script>

<style scoped lang="sass">
.layout
  display: flex
  align-items: center
  justify-content: space-around
</style>
