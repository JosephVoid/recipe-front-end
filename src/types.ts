export interface Recipe {
  id: string;
  title: string;
  desc: string;
  img: string;
  author: string;
  ingr: {
    name: string;
    quantity: number;
    unit: string;
  }[];
}
