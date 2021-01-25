<template>
  <section class="layout">
    <div class="layout__layers">
      <Controls />
    </div>
    <div class="layout__figure">
      <Figure />
    </div>
    <div class="layout__shift">
      <ShiftControls />
    </div>
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
  +media((padding: (320: 20px 0, 768: 40px 0)))
  max-width: 1200px
  width: 90vw
  margin: 0 auto
  min-height: 100vh
  +media((display: (320: grid, 1024: flex)))
  +media((justify-content: (1024: space-between)))
  $t-s: 11fr 9fr
  $t-m: 224px 1fr
  $t-l: 300px 1fr
  +media((grid-template-columns: (320: $t-s, 480: $t-m, 768: $t-l, 1024: unset)))
  +media((gap: (320: 12px 5vw, 1024: unset)))
  align-items: flex-start
  &__layers, &__shift
    +media((position: (1024: sticky)))
    +media((top: (1024: 40px)))
  &__shift
    min-width: 125px
    +media((grid-area: (320: '1 / 1 / 2 / 2', 1024: unset)))
  &__layers
    +media((grid-column-start: (320: 1, 1024: unset)))
  &__figure
    +media((position: (320: sticky, 1024: relative)))
    +media((top: (320: 20px, 1024: unset)))
</style>
