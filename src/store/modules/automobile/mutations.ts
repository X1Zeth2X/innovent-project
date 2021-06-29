import { Car } from "@/store/types";
import { MutationTree } from "vuex";
import { FilterValues, ListState } from "./types";

export const mutations: MutationTree<ListState> = {
  setListItems(state, items: Array<Car>) {
    state.listItems = items;
  },

  setFilter(state, filterValues: FilterValues) {
    state.filterValues = filterValues;
    console.log(state);
  },

  applyFilter(state) {
    // eslint-disable-next-line
    const filter: any = state.filterValues;
    // eslint-disable-next-line
    const filteredItems = state.listItems.filter((car: any) => {
      for (const key in filter) {
        if (car[key] === undefined || car[key] !== filter[key]) return false;
      }

      return true;
    });

    state.filteredList = filteredItems;
  },

  clearFilter(state) {
    state.filterValues = {};
    state.filteredList = [];
  },
};
