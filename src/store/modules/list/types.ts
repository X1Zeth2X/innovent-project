import { Car } from "@/store/types";

export interface ListState {
  listItems: Array<Car>;

  requesting: boolean;
  error: boolean;
  listErrorMsg: string;
}
