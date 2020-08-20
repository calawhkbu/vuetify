<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Create Project</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">Create Project</v-card-title>

        <v-card-text>
          <v-text-field label="Title" v-model="title"
          prepend-icon="folder"></v-text-field>
          <v-textarea label="Information"
          v-model="information"
          prepend-icon="edit"></v-textarea>
          <v-btn flat class="success mx0 mt-3"
          @click="submit"
          >Add Project</v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      information: "",
      date: null,
    };
  },
  methods:{
      submit(){

console.log(this.title,this.information)
      }
  }
};
</script>