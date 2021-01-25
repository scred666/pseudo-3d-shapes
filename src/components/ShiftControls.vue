<template>
  <div class="shift-controls">
    <my-checkbox :val="isShiftEnabled" label="shift:" @updateVal="toggleFigureShift" />
    <my-input :val="figureShift" @updateVal="updateFigureShift" v-if="isShiftEnabled">
      size:
    </my-input>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MyCheckbox from '@/components/controls/MyCheckbox'
import MyInput from '@/components/controls/MyInput'
export default {
  name: 'ShiftControls',
  components: { MyInput, MyCheckbox },
  methods: {
    ...mapMutations({
      TOGGLE_FIGURE_SHIFT: 'TOGGLE_FIGURE_SHIFT',
      UPDATE_FIGURE_SHIFT: 'UPDATE_FIGURE_SHIFT'
    }),
    toggleFigureShift(val) {
      this.TOGGLE_FIGURE_SHIFT(val)
    },
    updateFigureShift(val) {
      this.UPDATE_FIGURE_SHIFT(val)
    }
  },
  computed: {
    ...mapState({
      isShiftEnabled: state => state.imageParams.shift.isEnabled,
      figureShift: state => state.imageParams.shift.value
    })
  }
}
</script>

<style scoped lang="sass">
.shift-controls
  display: grid
  +media((gap: (320: 6px, 768: 12px)))
  justify-content: flex-start
</style>
