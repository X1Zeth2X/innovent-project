import { Car, RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { FilterValues, ListState } from "./types";

export const actions: ActionTree<ListState, RootState> = {
  async setListItems({ commit }, list: Array<Car>) {
    commit("setListItems", list);
  },

  async applyFilter({ commit }, filterValues: FilterValues) {
    // Set the filter values
    commit("setFilter", filterValues);
    // Apply those filter values
    commit("applyFilter");
  },

  // Reset the filter from original state
  async clearFilter({ commit }) {
    commit("clearFilter");
  },
};
