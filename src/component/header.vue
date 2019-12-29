<template>
  <div>
    <div class="tabs is-right">
        <router-link id = "logo" :to = links[3]>
            <figure class="image is-48x48px">
            <img src="https://bulma.io/images/placeholders/48x48.png">
            </figure>
        </router-link>
        <ul>
            <li class=""><router-link :to = links[2]>portfolio</router-link></li>
            <li class=""><router-link :to = links[1]>Aboutme</router-link></li>
            <li><router-link :to = links[0]>Contacts</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            links : ['/contact','/aboutme','/portfolio','/']
        }
  }
}
</script>

<style>

</style>