import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router';
import Header from './component/header.vue';
import Footer from './component/footer.vue'

Vue.component('Header',Header);
Vue.component('Footer',Footer);

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
