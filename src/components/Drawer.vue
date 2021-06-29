<template>
  <v-navigation-drawer app clipped width="350">
    <v-container>
      <p>Filters</p>

      <v-text-field
        label="Model"
        dense
        v-model="carModel"
        outlined
      ></v-text-field>

      <v-text-field
        label="Name"
        dense
        v-model="carName"
        outlined
      ></v-text-field>

      <v-menu open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mb-2"
            color="primary"
            outlined
            block
            large
            v-bind="attrs"
            v-on="on"
          >
            {{ carYear === 0 ? "Pick a Year" : carYear }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(year, index) in years"
            :key="index"
            @click="carYear = year"
          >
            <v-list-item-title> {{ year }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-divider class="my-6" />

      <v-btn @click="createFilter()" color="green" class="my-2" outlined block
        >Set Filter</v-btn
      >

      <v-btn @click="removeFilters()" color="error" class="my-2" outlined block
        >Clear Filter</v-btn
      >
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { FilterValues } from "@/store/modules/automobile/types";
import Vue from "vue";
import Component from "vue-class-component";
import { Emit } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

@Component
export default class Drawer extends Vue {
  @Getter("filter", { namespace: "automobile" })
  private filter!: FilterValues;

  @Action("applyFilter", { namespace: "automobile" })
  private applyFilter!: CallableFunction;

  @Action("clearFilter", { namespace: "automobile" })
  private clearFilter!: CallableFunction;

  @Emit("useFilter")
  private useFilter(value: boolean) {
    return value;
  }

  private years: Array<number> = [1982, 1990, 1995, 2000];

  // Instantiate filter values.
  private carModel = "";
  private carName = "";
  private carYear = 0;

  // Create filter method that will generate a filter based on the currentFilter values
  private createFilter() {
    // New filter values
    let filterValues: FilterValues = {};

    // Basic validation
    if (this.carModel !== "") filterValues.model = this.carModel;
    if (this.carName !== "") filterValues.name = this.carName;
    if (this.carYear !== 0 && typeof this.carYear === "number")
      filterValues.year = this.carYear;

    this.applyFilter(filterValues);
    this.useFilter(true);
  }

  // Remove any filters applied
  private removeFilters() {
    // Reset v-model values.
    this.carModel = "";
    this.carName = "";
    this.carYear = 0;

    // Clear filters in Vuex.
    this.clearFilter();
    this.useFilter(false);
  }
}
</script>
