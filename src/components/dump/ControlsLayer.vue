<template>
  <div class="layer">
    <div class="handle">
      <app-inline-svg :src="require('@/assets/img/drag.svg')" />
    </div>
    <div class="layer__controls">
      <div class="layer__controls-inputs">
        <div class="top">
          <app-input
            :id="`${layer.id}-height`"
            :val="layer.height"
            @updateVal="updateLayerParam($event, layerParams.height)"
          >
            <common-text> {{ layerParams.height }} </common-text>
          </app-input>
          <app-color-input
            :color="layer.fill"
            @updateColor="updateLayerParam($event, layerParams.fill)"
          />
        </div>
        <div class="bottom">
          <shape-switcher
            :id="layer.id"
            :current-shape="layer.shape"
            @selectNewShape="updateLayerParam($event, layerParams.shape)"
          />
        </div>
      </div>
      <div class="layer__controls-nav">
        <app-button
          v-for="button in actionButtons"
          :key="button.action"
          mod="layer-control"
          @click="handleAction(button.action)"
        >
          <template #icon>
            <app-inline-svg :src="button.image" />
          </template>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import ShapeSwitcher from '@/components/smart/ShapeSwitcher'
import { layerParams } from '@/utils/drawing'
import AppButton from '@/components/dump/AppButton'
import AppInput from '@/components/dump/AppInput'
import CommonText from '@/components/dump/CommonText'
import AppInlineSvg from '@/components/HOC/AppInlineSvg'
import AppColorInput from '@/components/dump/AppColorInput'

const actionButtons = [
  {
    action: 'moveUp',
    image: require('@/assets/img/up.svg')
  },
  {
    action: 'moveDown',
    image: require('@/assets/img/down.svg')
  },
  {
    action: 'removeLayer',
    image: require('@/assets/img/remove.svg')
  }
]
export default {
  name: 'ControlsLayer',
  components: {
    AppColorInput,
    AppInlineSvg,
    CommonText,
    AppInput,
    AppButton,
    ShapeSwitcher
  },
  props: {
    layer: {
      type: Object,
      required: true
    }
  },
  computed: {
    actionButtons: () => actionButtons,
    layerParams: () => layerParams
  },
  methods: {
    updateLayerParam(val, param) {
      this.$emit('updateParam', { val, id: this.layer.id, param })
    },
    handleAction(action) {
      this.$emit(action, this.layer.id)
    }
  }
}
</script>

<style scoped lang="sass">
.layer
  z-index: 1
  width: 100%
  background-color: $semi-white
  @extend %default-outer-box-shadow
  border-radius: rem(16)
  display: grid
  +media((grid-template-columns: (0: rem(30) 1fr, 576: rem(60) 1fr)))
  +media((padding: (0: rem(10) rem(6) rem(10) 0, 576: rem(12) rem(20) rem(12) 0)))
  +media((gap: (0: rem(6), 768: 0)))
  box-sizing: border-box
  .handle
    line-height: 0
    cursor: move
    max-width: 100%
    display: flex
    align-items: center
    color: $blue
    justify-content: center
    .svg-icon
      max-width: 80%
      width: auto
  &__controls
    display: flex
    align-items: center
    +media((gap: (0: rem(6), 576: rem(12), 768: rem(20))))
    &-inputs
      display: flex
      flex-direction: column
      +media((gap: (0: rem(6), 768: rem(12))))
      .top
        display: flex
        align-items: center
        +media((gap: (0: rem(6), 768: rem(12))))
      &::v-deep
        .app-input
          .label
            +media((display: (0: none, 480: flex)))
    // &-shape
      margin-left: auto
    &-nav
      // +media((box-shadow: (768: inset rem(1) 0 0 $blue)))
      +media((padding: (0: 0 rem(6), 576: 0)))
      display: grid
      grid-row-gap: rem(4)
</style>
