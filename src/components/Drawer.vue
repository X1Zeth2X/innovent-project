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
            >Year</v-btn
          >
        </template>

        <v-list>
          <v-subheader>Car Year</v-subheader>
          <v-list-item>
            <v-list-item-title> Year </v-list-item-title>
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

      {{ filter }}
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { FilterValues } from "@/store/modules/automobile/types";
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";

@Component
export default class Drawer extends Vue {
  @Getter("filter", { namespace: "automobile" })
  private filter!: FilterValues;

  @Action("setFilter", { namespace: "automobile" })
  private setFilter!: CallableFunction;

  @Action("clearFilter", { namespace: "automobile" })
  private clearFilter!: CallableFunction;

  // Instantiate filter values.
  private carModel = "";
  private carName = "";
  private carYear = 0;

  // Create filter method that will generate a filter based on the currentFilter values
  private createFilter() {
    // New filter values
    let filterValues: FilterValues = {};

    console.log(this.carModel);

    // Basic validation
    if (this.carModel !== "") filterValues.model = this.carModel;
    if (this.carName !== "") filterValues.name = this.carName;
    if (this.carYear !== 0 && typeof this.carYear !== "string")
      filterValues.year = this.carYear;

    this.setFilter(filterValues);
  }

  // Remove any filters applied
  private removeFilters() {
    // Reset v-model values.
    this.carModel = "";
    this.carName = "";
    this.carYear = 0;

    // Clear filters in Vuex.
    this.clearFilter();
  }
}
</script>
