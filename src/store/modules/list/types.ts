export interface Car {
  model: string;
  name: string;
  price: number;
  year: number;
  rating: number; // Stars (out of 5).
  thumbnail: string; // Car picture.
}

export interface ListState {
  listItems: Array<Car>;

  requesting: boolean;
  error: boolean;
  listErrorMsg: string;
}
