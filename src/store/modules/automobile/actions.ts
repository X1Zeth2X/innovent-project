import VehiclesAPI from "@/mock-api/vehicles-api";
import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { ListState } from "./types";

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
};
