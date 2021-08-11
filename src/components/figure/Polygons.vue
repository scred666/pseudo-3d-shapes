<script>
export default {
  name: 'Polygons',
  render(createElement) {
    return createElement(
      'g',
      {
        class: 'layer__decor'
      },
      this.$slots.default
    )
  }
}
</script>
