<template>
  <div id="landing">
    <Drawer />
    <v-container class="px-10">
      <v-row>
        <v-col sm="12" md="6">
          <CarItem v-for="data in listItems" :car="data" :key="data.id" />
        </v-col>
      </v-row>

      @TODO: Add Infinite Scrolling
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";

// Relative imports
import { Car } from "@/store/types";
import Drawer from "@/components/Drawer.vue";
import CarItem from "@/components/CarItem.vue";

@Component({
  components: {
    Drawer,
    CarItem,
  },
})
export default class Landing extends Vue {
  // vuex-class Getter method -> Gets the listItems in list store.
  @Getter("listItems", { namespace: "automobile" })
  private listItems!: Array<Car>;

  // vuex-class Action method -> Calls list.getVehicles store method.
  @Action("getVehicles", { namespace: "automobile" })
  private getVehicles!: CallableFunction;

  // Vue `created` lifecycle.
  private created() {
    // Once the landing page has been created, get vehicles from mock API.
    this.getVehicles();
  }
}
</script>
