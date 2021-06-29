import { RootState } from "@/store/types";
import { Module } from "vuex";
import { ListState } from "./types";

import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: ListState = {
  listItems: [],

  requesting: false,
  error: false,
  listErrorMsg: "",
};

const namespaced = true;

export const automobile: Module<ListState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
