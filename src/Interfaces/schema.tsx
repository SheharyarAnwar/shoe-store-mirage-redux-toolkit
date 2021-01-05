export interface Shoes {
  id: string;
  image: string;
  color: string;
  name: string;
  description: string;
  price: number;
  category: string;
  gender: "Male" | "Female";
}

export interface DBSchema {
  shoes: Shoes;
}
