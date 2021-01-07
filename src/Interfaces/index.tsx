export {};
export interface Shoes {
  id: number;
  image: string;
  colors: number;
  name: string;
  price: number;
  category: Category;
}
export type Category = "M" | "F";
export interface Cart {
  quantity: number;
  id: number;
  name: string;
  price: number;
}

export interface RootState {
  shoes: Shoes[];
  cart: Cart[];
  total: number;
}
