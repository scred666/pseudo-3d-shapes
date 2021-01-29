module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/demos/3d-shapes',
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
