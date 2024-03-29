import { Button, Typography } from "@mui/material";
import RecipeCard from "../components/recipe-card";
import { Recipe } from "../types";
import DisplayRecipe from "../components/display-recipe";
import { Link } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";

export default function Recipes() {
  const [bLocation, setBLocation] = useBrowserLocation();

  const dummy: Recipe[] = [
    {
      id: "s",
      title: "Salad",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo aliquid voluptate facilis modi. Impedit aspernatur earum voluptatum soluta explicabo architecto perferendis, totam, assumenda alias quidem cumque sed doloremque eaque.",
      author: "Yoseph",
      img: "https://picsum.photos/id/237/200/300",
      ingr: [
        { id: "ing1", name: "salad", quantity: 500, unit: "grams" },
        { id: "ing2", name: "vingar", quantity: 500, unit: "ml" },
      ],
    },
    {
      id: "sv",
      title: "Soup with Veg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo aliquid voluptate facilis modi. Impedit aspernatur earum voluptatum soluta explicabo architecto perferendis, totam, assumenda alias quidem cumque sed doloremque eaque.",
      author: "Dean",
      img: "https://picsum.photos/id/267/200/300",
      ingr: [
        { id: "ing1", name: "salad", quantity: 500, unit: "grams" },
        { id: "ing2", name: "vingar", quantity: 500, unit: "ml" },
        { id: "ing3", name: "Flour", quantity: 1, unit: "kg" },
      ],
    },
  ];
  console.log(`/${bLocation === "/recipes" ? "" : "recipes/"}create-recipes`);
  return (
    <div className="p-10 flex">
      <div className="flex flex-col w-1/3">
        <Link
          href={`/${bLocation === "/recipes" ? "" : "recipes/"}create-recipes`}
        >
          <Button variant="contained" size="small" className="w-2/3 !mb-4">
            New Recipe
          </Button>
        </Link>
        <Typography variant="h5" gutterBottom>
          Recipe List
        </Typography>
        {dummy.map((rcp, idx) => (
          <RecipeCard data={rcp} key={idx} />
        ))}
      </div>
      <div className="flex flex-col w-2/3">
        <DisplayRecipe data={dummy[0]} />
      </div>
    </div>
  );
}
