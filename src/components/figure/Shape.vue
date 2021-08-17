<script>
import { layerParams } from '@/utils/drawing'

export default {
  name: 'Shape',
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
  render(createElement) {
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
