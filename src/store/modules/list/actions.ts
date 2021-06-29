import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { ListState } from "./types";

export const actions: ActionTree<ListState, RootState> = {
  async getVehicles({ commit }) {
    commit("listRequest"); // Commit mutation

    try {
      // Get Vehicles from Mock-API
      return null;
    } catch (error) {
      return false;
    }
  },
};
