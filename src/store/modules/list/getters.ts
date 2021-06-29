import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { Car, ListState } from "./types";

export const getters: GetterTree<ListState, RootState> = {
  listItems(state): Array<Car> | null {
    return state.listItems;
  },

  requesting(state): boolean {
    return state.requesting;
  },
};
