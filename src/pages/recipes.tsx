import { Button, Typography } from "@mui/material";
import RecipeCard from "../components/recipe-card";
import { Recipe } from "../types";
import DisplayRecipe from "../components/display-recipe";
import { Link } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import { useEffect, useState } from "react";
import { useGetRecipes } from "../api";

export default function Recipes() {
  const [bLocation, setBLocation] = useBrowserLocation();
  const recipeList = useGetRecipes();
  const [displayedRecipe, setDisplayedRecipe] = useState<number>(0);

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
        {recipeList.data?.map((rcp, idx) => (
          <RecipeCard
            data={rcp}
            key={idx}
            onView={() => setDisplayedRecipe(idx)}
          />
        ))}
      </div>
      <div className="flex flex-col w-2/3">
        {recipeList.data?.[displayedRecipe] && (
          <DisplayRecipe data={recipeList.data?.[displayedRecipe]!} />
        )}
      </div>
    </div>
  );
}
