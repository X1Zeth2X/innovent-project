import VehiclesAPI from "@/mock-api/vehicles-api";
import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { FilterValues, ListState } from "./types";

export const actions: ActionTree<ListState, RootState> = {
  async getVehicles({ commit }) {
    commit("listRequest"); // Commit mutation

    try {
      // Get Vehicles from Mock-API
      const vehiclesApi = new VehiclesAPI();
      const vehicles = await vehiclesApi.getVehicles();

      // Set the vehicles into the
      commit("setListItems", vehicles);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async setFilter({ commit }, filterValues: FilterValues) {
    commit("setFilter", filterValues);
  },

  // Reset the filter from original state
  async clearFilter({ commit }) {
    try {
      // Get Vehicles from Mock-API
      const vehiclesApi = new VehiclesAPI();
      const vehicles = await vehiclesApi.getVehicles();

      // Set the vehicles into the
      commit("setListItems", vehicles);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

    commit("clearFilter");
  },
};
