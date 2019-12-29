<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>
<style lang="sass" src="bulma"></style>
<style lang="css">
  #app{
    background-color: #2f2f2f;
    font-family: monospace;
    height : 100vh;
  }
</style>
