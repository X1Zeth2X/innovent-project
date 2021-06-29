import { RootState, Car } from "@/store/types";
import { GetterTree } from "vuex";
import { FilterValues, ListState } from "./types";

export const getters: GetterTree<ListState, RootState> = {
  listItems(state): Array<Car> | undefined {
    return state.listItems;
  },

  filteredList(state): Array<Car> | undefined {
    return state.filteredList;
  },

  filter(state): FilterValues | undefined {
    return state.filterValues;
  },
};
