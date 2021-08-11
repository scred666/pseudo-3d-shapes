<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from '@/components/smart/Layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap')
body
  margin: 0
#app
  font-family: 'Quicksand', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  min-height: 100vh
  background-color: $semi-white
</style>
