export interface Recipe {
  _id: string;
  title: string;
  desc: string;
  img: string;
  author: string;
  author_id: string;
  ingr: {
    id: string;
    name: string;
    quantity: number;
    unit: string;
  }[];
}
