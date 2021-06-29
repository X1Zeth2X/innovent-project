import { MutationTree } from "vuex";
import { Car, ListState } from "./types";

export const mutations: MutationTree<ListState> = {
  listRequest(state) {
    state.requesting = true;
    state.error = false;
    state.listErrorMsg = "";
  },

  setListItems(state, items: Array<Car>) {
    state.listItems = items;
  },
};
