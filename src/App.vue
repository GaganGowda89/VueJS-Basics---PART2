<template>
  <div id="app">
   <h1> Lets Start VueApp... !!!</h1>
   <!-- <app-message></app-message> -->
   <!-- Load the routes from main.js and render where your navigating so we use router-view -->
   <hr>

   <!-- <a href = "/"> Home </a> -->
   <router-link to = "/">Home  </router-link>
   <router-link to = "/users/5">      Users - Five </router-link>
   <router-link to = "/users/10">      Users - X </router-link>
   <router-link to = "/message">      Message</router-link>

   <hr>
   <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>

</style>
