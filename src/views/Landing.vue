<template>
  <div id="landing">
    <Drawer />

    <v-container>
      Landing page
      <v-btn v-on:click="getVehicles"></v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

// Relative imports
import Drawer from "@/components/Drawer.vue";

@Component({
  components: {
    Drawer,
  },
})
export default class Landing extends Vue {
  // vuex-class Action Method -> Calls list.getVehicles store method.
  @Action("getVehicles", { namespace: "list" })
  private getVehicles!: CallableFunction;
}
</script>
