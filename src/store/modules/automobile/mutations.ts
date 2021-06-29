import { Car } from "@/store/types";
import { MutationTree } from "vuex";
import { FilterValues, ListState } from "./types";

export const mutations: MutationTree<ListState> = {
  listRequest(state) {
    state.requesting = true;
    state.error = false;
    state.listErrorMsg = "";
  },

  setListItems(state, items: Array<Car>) {
    state.requesting = false;
    state.listItems = items;
  },

  setFilter(state, filterValues: FilterValues) {
    state.filterValues = filterValues;
  },

  clearFilter(state) {
    state.filterValues = {};
  },
};
