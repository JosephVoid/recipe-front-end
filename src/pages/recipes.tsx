import { Button, Typography } from "@mui/material";
import RecipeCard from "../components/recipe-card";
import { Recipe } from "../types";
import DisplayRecipe from "../components/display-recipe";
export default function Recipes() {
  const dummy: Recipe[] = [
    {
      id: "s",
      title: "Salad",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo aliquid voluptate facilis modi. Impedit aspernatur earum voluptatum soluta explicabo architecto perferendis, totam, assumenda alias quidem cumque sed doloremque eaque.",
      author: "Yoseph",
      img: "https://picsum.photos/id/237/200/300",
      ingr: [
        { name: "salad", quantity: 500, unit: "grams" },
        { name: "vingar", quantity: 500, unit: "ml" },
      ],
    },
    {
      id: "sv",
      title: "Soup with Veg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo aliquid voluptate facilis modi. Impedit aspernatur earum voluptatum soluta explicabo architecto perferendis, totam, assumenda alias quidem cumque sed doloremque eaque.",
      author: "Dean",
      img: "https://picsum.photos/id/267/200/300",
      ingr: [
        { name: "salad", quantity: 500, unit: "grams" },
        { name: "vingar", quantity: 500, unit: "ml" },
        { name: "Flour", quantity: 1, unit: "kg" },
      ],
    },
  ];

  return (
    <div className="p-10 flex">
      <div className="flex flex-col w-1/3">
        <Button variant="contained" size="small" className="w-2/3 !mb-4">
          New Recipe
        </Button>
        <Typography variant="h5" gutterBottom>
          Recipe List
        </Typography>
        {dummy.map((rcp) => (
          <RecipeCard data={rcp} />
        ))}
      </div>
      <div className="flex flex-col w-2/3">
        <DisplayRecipe data={dummy[0]} />
      </div>
    </div>
  );
}
