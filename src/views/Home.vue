<template>
  <div class="home">
    <v-row>
<v-btn class="pink white--text">click Me</v-btn></v-row>
<v-row style="marginTop:10px">
  <v-btn color="blue">click Me</v-btn>
</v-row>
<v-row style="marginTop:10px">
  <v-btn flat="true" class="pink">transparent Me</v-btn>
</v-row>
  <v-btn depressed class="pink white--text">
    <v-icon>email</v-icon>
    </v-btn>



    
    
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
