module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/3d-shapes/figures',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/helpers.sass"'
      },
      css: {
        sourceMap: true
      }
    }
  }
}
