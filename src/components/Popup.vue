<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Create Project</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">Create Project</v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="information" prepend-icon="edit"></v-textarea>
            <v-row>
              <v-col cols="12" lg="6">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Due Date"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="event"
                      v-bind="attrs"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>

                  <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                </v-menu>
                <p>
                  Date in ISO format:
                  <strong>{{ date }}</strong>
                </p>
                <div>moment Date YYYY:{{calDate}}</div>
              </v-col>
            </v-row>

            <v-btn flat class="success mx0 mt-3" @click="submit" :loading="created">Add Project</v-btn>
          </v-form>
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
import Vue from "vue";
import db from "@/fb";

const moment = require("moment");
require("moment/locale/en-gb");

Vue.use(require("vue-moment"), {
  moment,
});

export default {
  mounted() {
    console.log(Vue.moment("2019-01-01").format("YYYY")); //es
  },
  data() {
    return {
      created: false,
      title: "",
      information: "",
      date: null,
      inputRules: [(v) => v.length >= 3 || "Minimum Length is 3 characters"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.created=true;

        console.log(this.title, this.information);
        const project = {
          title: this.title,
          content: this.information,
          due: this.$moment(this.date).format("YYYY-MM-DD"),
          status: "Open",
          person: "The PopUP VUE",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.created = false;
            this.dialog=false;
            this.$emit('createdProject')
            });
      }
    },
  },
  computed: {
    calDate: function () {
      return this.date ? this.$moment(this.date).format("YYYY") : "";
    },
  },
};
</script>