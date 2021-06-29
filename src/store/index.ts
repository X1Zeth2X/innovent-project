import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { RootState } from "./types";

// Import vuex-class modules
import { automobile } from "./modules/automobile/index";

// Register Vuex module in Vue app.
Vue.use(Vuex);

// Instantiate a new store.
const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },

  modules: {
    // Register vuex modules
    automobile,
  },
};

// Create a new Vuex store with the `store` values.
export default new Vuex.Store<RootState>(store);
