<template>
  <div id="landing">
    <Drawer v-on:useFilter="updateList" />
    <v-container class="px-10">
      <v-row v-if="showList().length > 0">
        <v-col sm="12" md="6">
          <CarItem v-for="data in showList()" :car="data" :key="data.id" />
        </v-col>
      </v-row>

      <div v-else class="text-h3">No more cars to show.</div>
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
import VehiclesAPI from "@/mock-api/vehicles-api";
import { Watch } from "vue-property-decorator";

const vehiclesAPI = new VehiclesAPI();

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

  // vuex-class Getter method -> Gets the filteredItems in list store.
  @Getter("filteredList", { namespace: "automobile" })
  private filteredList!: Array<Car>;

  // vuex-class Action method -> Calls list.getVehicles store method.
  @Action("setListItems", { namespace: "automobile" })
  private setListItems!: CallableFunction;

  @Watch("bottom")
  private async checkBottom(isBottom: boolean) {
    if (isBottom) {
      const vehicles = await vehiclesAPI.getVehicles(
        this.listItems.length,
        this.listItems.length + 3
      );
      this.setListItems(this.listItems.concat(vehicles));
    }
  }

  private filtered = false;
  private bottom = false;

  // Vue `created` lifecycle.
  private async created() {
    // Once the landing page has been created, get vehicles from mock API.
    const vehicles = await vehiclesAPI.getVehicles(0, 3);

    // Set the Vuex listItems value to the provided value.
    this.setListItems(vehicles);

    window.addEventListener("scroll", () => {
      this.bottom = this.bottomIsVisible();
    });
  }

  // Update the list to use filteredList or not.
  private updateList(value: boolean): void {
    this.filtered = value;
  }

  // Computed: returns the filtered list or original listItems.
  private showList(): Array<Car> {
    if (this.filtered) return this.filteredList;
    return this.listItems;
  }

  private bottomIsVisible() {
    const scrollY = window.scrollY;
    const visible = document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const bottomOfPage = visible + scrollY >= pageHeight;

    return bottomOfPage;
  }
}
</script>
