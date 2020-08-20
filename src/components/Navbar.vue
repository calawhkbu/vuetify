<template>
<div>
    <v-toolbar app dark color=" white"> 
        <v-app-bar-nav-icon class="grey--text"
        v-on:click="drawer=!drawer">
        </v-app-bar-nav-icon>
<v-toolbar-title class="text-uppercase grey--text">
<span class="font-weight-light">Todo</span>
<span>calaw</span>
</v-toolbar-title >
<v-spacer></v-spacer>
<v-btn flat color="grey">
<span>Sign Out</span>
<v-icon right>exit_to_app</v-icon>

</v-btn>
    </v-toolbar>
    <v-navigation-drawer 
    v-model="drawer"
    app
    
    class="indigo">
        <p>test</p>

    </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            drawer:false,
        }
    }
    
}
</script>
<style lang="less" scoped>

</style>