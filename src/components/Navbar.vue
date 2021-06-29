<template>
  <div id="navigation">
    <v-app-bar app color="primary" dark flat clipped-left>
      <v-toolbar-title>Linus Automobiles</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Landing</v-btn>

        <v-btn text disabled>About Us</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Navbar extends Vue {}
</script>
