// Car Interface - will be used by multiple vuex modules.
export interface Car {
  model: string;
  name: string;
  price: number;
  year: number;
  rating: number; // Stars (out of 5).
  thumbnail: string; // Car picture.
}

// Store Root or Main values.
export interface RootState {
  // Version of the Vuex store.
  version: string;
}
