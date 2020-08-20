<template>
  <div class="home">

  <!-- <v-btn class="hidden-md-and-down">md or lessClick Me</v-btn> -->
    <v-btn class="hidden-md-and-up"> md and up click me</v-btn>
       <v-btn class="hidden-sm-only"> sm click me</v-btn>
 
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is HomePage</h1>
    <router-link to="/about"><a>about</a></router-link>
  <p class="pink lighten red --text text--darken 4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In explicabo numquam omnis at est, quibusdam dicta reprehenderit laudantium perspiciatis itaque porro sapiente eius consequatur aliquid provident dolorum, doloremque ratione accusantium.</p>
  <h1 class="display-1">Massive Display</h1>
    <h1 class="display-2">Massive Display</h1>
  <h1 class="display-3">Massive Display</h1>
    <h1 class="display-4">Massive Display</h1>
    <p class=".text-uppercase"> This is a paragraph</p>


  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
