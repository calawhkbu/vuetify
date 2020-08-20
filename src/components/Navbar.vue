<template>
  <div>
      <v-snackbar v-model="snackbar">
          <v-row wrap>
        <span>Created Project!</span>
        <v-divider/>
        <span><v-btn class="white--text" right @click="snackbar=false">Close</v-btn></span>
          </v-row>
      </v-snackbar>


    <v-toolbar app dark color=" white">
      <v-app-bar-nav-icon class="grey--text" v-on:click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>calaw</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-flex>
        123
        <Popup @createdProject="snackbar=true"/>
      </v-flex>
      <v-list v-for="i in links" :key="i.text">
        <router-link :to="i.route">
          <v-list-title>
            <v-list-title-action>
              <v-icon class="white--text">{{i.icon}}</v-icon>
            </v-list-title-action>
            <v-list-title-content>
              <v-list-title-title class="white--text" style="textAlign:center">{{i.text}}</v-list-title-title>
            </v-list-title-content>
          </v-list-title>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Popup from "./Popup";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>
<style lang="less" scoped>
</style>