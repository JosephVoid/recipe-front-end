import Button from "@mui/material/Button";
import { Typography, TextField, IconButton } from "@mui/material";
import { Add, RemoveCircle } from "@mui/icons-material";
import React from "react";
import { Recipe } from "../types";
import { Cloudinary } from "@cloudinary/url-gen";
import { blobToBase64 } from "../helpers";
import { createRecipes } from "../api";
import { useLocation } from "wouter";
import Cookies from "js-cookie";

export default function CreateRecipes() {
  const [recipeName, setRecipeName] = React.useState("");
  const [recipeDesc, setRecipeDesc] = React.useState("");
  const [recipeAuthor, setRecipeAuthor] = React.useState("");
  const [recipeImg, setRecipeImg] = React.useState<File | null>();
  const [recipeIngr, setRecipeIngr] = React.useState<Recipe["ingr"]>([]);
  const [ingName, setIngrName] = React.useState("");
  const [ingrAmount, setIngrAmount] = React.useState(0);
  const [ingrUnit, setIngrUnit] = React.useState("");
  const [location, setLocation] = useLocation();

  async function uploadImage(): Promise<string> {
    const data = new FormData();
    data.append("file", recipeImg!);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET ?? ""
    );
    data.append(
      "cloud_name",
      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME ?? ""
    );
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      return res.url;
    } catch (error) {
      throw error;
    }
  }

  async function handleSubmit() {
    let imgUrl = await uploadImage();
    const final: Omit<Recipe, "_id"> = {
      title: recipeName,
      desc: recipeDesc,
      author: recipeAuthor,
      author_id: Cookies.get("user_id") ?? "",
      img: imgUrl,
      ingr: recipeIngr ?? [],
    };
    console.log(final);
    let result = await createRecipes(final);
    if (result) setLocation("/", { state: "Recipe Created" });
  }

  function handleIngrAddition() {
    setRecipeIngr([
      ...recipeIngr,
      {
        id: "ingr" + Math.random(),
        name: ingName,
        quantity: ingrAmount,
        unit: ingrUnit,
      },
    ]);

    setIngrName("");
    setIngrAmount(0);
    setIngrUnit("");
  }

  function handleIngrRemoval(id: string) {
    setRecipeIngr((recipeIngr) => recipeIngr.filter((ingr) => ingr.id !== id));
  }

  return (
    <div className="p-10 flex">
      <div className="w-1/2 flex flex-col">
        <Typography variant="h5" gutterBottom>
          Create New Recipe
        </Typography>
        <form noValidate autoComplete="off" className="flex flex-col">
          <TextField
            label="Recipe Name"
            id="recipe-name"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <TextField
            label="Description"
            id="recipe-desc"
            multiline
            variant="standard"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) => setRecipeDesc(e.target.value)}
          />
          <TextField
            label="Author"
            id="recipe-author"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) => setRecipeAuthor(e.target.value)}
          />
          <input
            id="recipe-author"
            type="file"
            onChange={(e) => setRecipeImg(e.target.files?.[0])}
            className="mb-4"
          />
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Ingredients
          </Typography>
          <hr className="mb-5" />
          <div>
            <Typography variant="subtitle1" gutterBottom>
              {recipeIngr.map((ingr, idx) => (
                <div key={idx}>
                  <IconButton onClick={() => handleIngrRemoval(ingr.id)}>
                    <RemoveCircle color="error" />
                  </IconButton>
                  {ingr.name}............................{ingr.quantity}{" "}
                  {ingr.unit}
                </div>
              ))}
            </Typography>
          </div>
          <div className="flex items-baseline mb-5">
            <TextField
              label="Ingredient"
              id="item-ingr"
              variant="standard"
              className="w-3/6 !mr-2"
              value={ingName}
              onChange={(e) => setIngrName(e.target.value)}
            />
            <TextField
              label="Amount"
              id="item-amount"
              variant="standard"
              className="w-1/6 !mr-2"
              type="number"
              value={ingrAmount}
              onChange={(e) => setIngrAmount(Number(e.target.value))}
            />
            <TextField
              label="Unit"
              id="item-unit"
              variant="standard"
              className="w-1/6 !mr-2"
              value={ingrUnit}
              onChange={(e) => setIngrUnit(e.target.value)}
            />
            <IconButton onClick={handleIngrAddition}>
              <Add />
            </IconButton>
          </div>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}
