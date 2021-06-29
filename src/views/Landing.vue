<template>
  <div id="landing">
    <Drawer />

    <v-container> Landing page </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Relative imports
import Drawer from "@/components/Drawer.vue";

@Component({
  components: {
    Drawer,
  },
})
export default class Landing extends Vue {}
</script>
