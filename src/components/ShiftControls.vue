<template>
  <div class="shift-controls">
    <my-checkbox :val="isOffsetEnabled" label="shift:" @updateVal="toggleLayersOffset" />
    <my-input :val="layersOffset" @updateVal="updateLayersOffset" v-if="isOffsetEnabled">
      size:
    </my-input>
  </div>
</template>

<script>
import MyCheckbox from '@/components/controls/MyCheckbox'
import MyInput from '@/components/controls/MyInput'
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
  components: { MyInput, MyCheckbox },
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
