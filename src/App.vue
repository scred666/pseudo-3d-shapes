<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="sass">
body
  margin: 0
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  min-height: 100vh
  background-color: #35495e
</style>
