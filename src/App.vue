<template>
  <div id="app">
    <div class="tabs is-right">
      <ul>
        <!-- <li class="is-active"><a>portfolio</a></li> -->
        <li class=""><a>portfolio</a></li>
        <li class=""><a>About</a></li>
        <li><a>Contacts</a></li>
      </ul>
    </div>
    <div class="container">
      <span class = "name">Hello,my name is Ravi Singh!</span>
      <p>I am a fullstack Developer, UI/UX Javascript Specialist.</p>
      <span>Feel Free to contact me via email at .</span><a href="mailto:ravisingh29091996@gmail.com" target="_top">ravisingh29091996@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  .container{
    margin : 0 auto;
    text-align: center;
  }
  .container > .name {
    font-size: 21px;
    color  : #cacaca
  }
  .container > span {
    color : #868686
  }
  
  .tabs.is-right ul{
    padding: 72px;
    font-size: 17px;
  }

  .tabs ul, .tabs a {
    border-bottom-color : none;
    border-bottom-style : none;
    border-bottom-width : none;
  }
  .tabs a:hover{
    border-bottom-color : none;
    color : #dbdbdb
  }
  
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
