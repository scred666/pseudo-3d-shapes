<template>
  <div class="shift-controls">
    <app-check-box :val="isOffsetEnabled" id="layers-offset" @updateVal="toggleLayersOffset">
      offset:
    </app-check-box>
    <app-input
      :val="layersOffset"
      @updateVal="updateLayersOffset"
      id="offset-value"
      :is-disabled="!isOffsetEnabled"
    >
      Size
    </app-input>
  </div>
</template>

<script>
import AppCheckBox from '@/components/dump/AppCheckBox'
import AppInput from '@/components/dump/AppInput'
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
  name: 'ShiftControls',
  components: { AppInput, AppCheckBox },
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
.shift-controls
  display: grid
  +media((gap: (320: rem(6), 768: rem(12))))
  justify-content: flex-start
</style>
