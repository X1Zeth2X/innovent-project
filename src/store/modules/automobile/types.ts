import { Car } from "@/store/types";

export interface FilterValues {
  model?: string;
  year?: number;
  name?: string;
}

export interface ListState {
  listItems: Array<Car>;

  filterValues: FilterValues;

  requesting: boolean;
  error: boolean;
  listErrorMsg: string;
}
