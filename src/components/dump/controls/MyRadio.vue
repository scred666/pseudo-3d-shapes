<template>
  <div class="item">
    <input
      type="radio"
      :value="value"
      :checked="checked"
      :id="`${id}-${value}`"
      :name="`shapeSwitcher-${id}`"
      @change="handler"
    />
    <label :for="`${id}-${value}`" class="item__label">
      <img :src="images[value]" :alt="value" class="item__label-img" />
    </label>
  </div>
</template>

<script>
import { types } from '@/utils/drawing'

const images = {
  [types.cube]: require('@/assets/img/cube.svg'),
  [types.pyramid]: require('@/assets/img/pyramid.svg')
}
export default {
  name: 'MyRadio',
  props: {
    value: {
      type: String,
      default: 'cube'
    },
    checked: {
      type: Boolean
    },
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    handler() {
      this.$emit('switchTo', this.value)
    }
  },
  computed: {
    images: () => images
  }
}
</script>

<style scoped lang="sass">
.item
  line-height: 0
  border-radius: rem(4)
  background-color: $light
  &:not(:last-child)
    margin-right: rem(4)
  input
    display: none
    position: absolute
    opacity: 0
    pointer-events: none
    &:checked
      + label
         .item__label-img
           filter: $filter-green
  &__label
    cursor: pointer
    line-height: 0
    width: rem(30)
    height: rem(30)
    display: flex
    justify-content: center
    align-items: center
    &-img
      width: 100%
      height: 100%
      transition: .5s
      filter: $filter-black
</style>
