<template>
  <section class="layout">
    <div class="layout__layers">
      <Controls :is-layers-exist="isLayersExist" />
    </div>
    <div class="layout__figure" v-if="isLayersExist">
      <Figure />
    </div>
    <div class="layout__shift" v-if="isLayersExist">
      <ShiftControls />
    </div>
  </section>
</template>

<script>
import Figure from '@/components/Figure'
import Controls from '@/components/Controls'
import ShiftControls from '@/components/ShiftControls'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    ShiftControls,
    Figure,
    Controls
  },
  computed: {
    ...mapState({
      layers: state => state.layers
    }),
    isLayersExist() {
      return !!this.layers.length
    }
  }
}
</script>

<style scoped lang="sass">
.layout
  +media((padding: (320: rem(20) 0, 768: rem(40) 0)))
  max-width: rem(1200)
  width: 90vw
  margin: 0 auto
  +media((display: (320: grid, 1024: flex)))
  +media((justify-content: (1024: space-between)))
  $t-s: 11fr 9fr
  $t-m: rem(224) 1fr
  $t-l: rem(300) 1fr
  +media((grid-template-columns: (320: $t-s, 480: $t-m, 768: $t-l, 1024: unset)))
  +media((gap: (320: rem(12) 5vw, 1024: unset)))
  align-items: flex-start
  &__layers, &__shift
    +media((position: (1024: sticky)))
    +media((top: (1024: rem(40))))
  &__shift
    min-width: rem(125)
    +media((grid-area: (320: '1 / 1 / 2 / 2', 1024: unset)))
  &__layers
    +media((grid-column-start: (320: 1, 1024: unset)))
  &__figure
    +media((position: (320: sticky, 1024: relative)))
    +media((top: (320: rem(20), 1024: unset)))
</style>
