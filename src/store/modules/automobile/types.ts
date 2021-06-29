import { Car } from "@/store/types";

export interface FilterValues {
  model?: string;
  name?: string;
  year?: number;
}

export interface ListState {
  listItems: Array<Car>;
  filteredList?: Array<Car>;
  filterValues?: FilterValues;
}
