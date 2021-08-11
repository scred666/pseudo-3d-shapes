<script>
export default {
  props: {
    type: {
      type: String,
      validator: v => ['title'].includes(v)
    }
  },
  name: 'CommonText',
  render(createElement) {
    return createElement(
      'div',
      {
        class: {
          'common-text': true,
          [`common-text--${this.type}`]: this.type
        }
      },
      this.$slots.default
    )
  }
}
</script>

<style scoped lang="sass">
.common-text
  z-index: 1
  position: relative
  text-align: left
  +media((font-size: (0: rem(14), 768: rem(16))))
  font-weight: bold
  color: $blue
  &--title
    $t-s-l: rem(4) rem(4) rem(9) $grey, rem(-4) rem(-4) rem(9) $white
    $t-s-s: rem(2) rem(2) rem(2) $grey, rem(-2) rem(-2) rem(2) $white
    +media((text-shadow: (0: $t-s-s, 768: $t-s-l)))
    +media((font-size: (0: rem(48), 768: rem(64), 1024: rem(96))))
    line-height: 100%
    color: $semi-white
    text-align: center
    +media((margin-bottom: (0: rem(24), 768: rem(40))))
</style>
