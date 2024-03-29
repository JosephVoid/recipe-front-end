export interface Recipe {
  id: string;
  title: string;
  desc: string;
  img: string;
  author: string;
  ingr: {
    id: string;
    name: string;
    quantity: number;
    unit: string;
  }[];
}
