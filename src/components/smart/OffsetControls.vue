<template>
  <div class="offset-controls">
    <app-check-box :val="isOffsetEnabled" id="layers-offset" @updateVal="toggleLayersOffset">
      <common-text>offset</common-text>
    </app-check-box>
    <app-input
      :val="layersOffset"
      @updateVal="updateLayersOffset"
      id="offset-value"
      :is-disabled="!isOffsetEnabled"
    >
      <common-text> size </common-text>
    </app-input>
  </div>
</template>

<script>
import AppCheckBox from '@/components/dump/AppCheckBox'
import AppInput from '@/components/dump/AppInput'
import CommonText from '@/components/dump/CommonText'
export default {
  props: {
    layersOffset: {
      type: Number,
      required: true
    },
    isOffsetEnabled: {
      type: Boolean,
      required: true
    }
  },
  name: 'OffsetControls',
  components: { CommonText, AppInput, AppCheckBox },
  methods: {
    toggleLayersOffset(val) {
      this.$emit('toggleLayersOffset', val)
    },
    updateLayersOffset(val) {
      this.$emit('updateLayersOffset', val)
    }
  }
}
</script>

<style scoped lang="sass">
.offset-controls
  display: grid
  +media((gap: (0: rem(6), 768: rem(12))))
  justify-content: flex-start
  +media((padding: (0: rem(20), 1024: rem(40))))
  background: $semi-white
  border-radius: rem(16)
  @extend %default-outer-box-shadow
</style>
