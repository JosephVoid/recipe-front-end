import { Button, Snackbar, Typography } from "@mui/material";
import RecipeCard from "../components/recipe-card";
import { Recipe } from "../types";
import DisplayRecipe from "../components/display-recipe";
import { Link } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import { useEffect, useState } from "react";
import { useGetRecipes } from "../api";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

export default function Recipes() {
  const [bLocation, setBLocation] = useBrowserLocation();
  const recipeList = useGetRecipes();
  const [displayedRecipe, setDisplayedRecipe] = useState<number>(0);
  const [snackText, setSnackText] = useState<any>();
  const [SnkText, setSnkText] = useState<string>("");

  useEffect(() => {
    if (window.history.state) setSnackText(window.history.state);
    setTimeout(() => setSnackText(undefined), 3000);
  }, []);

  return (
    <div className="p-10 flex">
      <div className="flex flex-col w-1/3">
        {Cookies.get("user_id") !== undefined && (
          <Link
            href={`/${
              bLocation === "/recipes" ? "" : "recipes/"
            }create-recipes`}
          >
            <Button variant="contained" size="small" className="w-2/3 !mb-4">
              New Recipe
            </Button>
          </Link>
        )}
        {Cookies.get("user_id") === undefined && (
          <Button
            variant="contained"
            size="small"
            className="w-2/3 !mb-4"
            disabled={true}
          >
            New Recipe
          </Button>
        )}
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
          <DisplayRecipe
            data={recipeList.data?.[displayedRecipe]!}
            onAdd={() => {
              setSnkText("Added To Shopping");
              setTimeout(() => setSnkText(""), 3000);
            }}
            onDelete={() => {
              window.location.reload();
            }}
          />
        )}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackText}
        message={snackText}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={SnkText !== ""}
        message={SnkText}
      />
    </div>
  );
}
