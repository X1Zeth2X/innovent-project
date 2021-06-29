<template>
  <v-app>
    <Navbar />

    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Relative Imports
import Navbar from "./components/Navbar.vue";

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>
