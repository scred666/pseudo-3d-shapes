<script>
import { layerParams } from '@/utils/drawing'

export default {
  props: {
    path: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      required: true
    }
  },
  name: 'Shape',
  render(createElement, context) {
    return createElement('path', {
      class: layerParams.shape,
      attrs: {
        d: this.path,
        fill: this.fill
      }
    })
  }
}
</script>

<style scoped lang="sass">
.shape
  transition: .3s
</style>
