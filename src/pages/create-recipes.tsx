import Button from "@mui/material/Button";
import { Typography, TextField, IconButton } from "@mui/material";
import { Add, RemoveCircle } from "@mui/icons-material";
import React from "react";
import { Recipe } from "../types";

export default function CreateRecipes() {
  const [recipeName, setRecipeName] = React.useState("");
  const [recipeDesc, setRecipeDesc] = React.useState("");
  const [recipeAuthor, setRecipeAuthor] = React.useState("");
  const [recipeImg, setRecipeImg] = React.useState<File | null>();
  const [recipeIngr, setRecipeIngr] = React.useState<Recipe["ingr"]>([]);
  const [ingName, setIngrName] = React.useState("");
  const [ingrAmount, setIngrAmount] = React.useState(0);
  const [ingrUnit, setIngrUnit] = React.useState("");

  function handleSubmit() {
    const final: Omit<Recipe, "id"> = {
      title: recipeName,
      desc: recipeDesc,
      author: recipeAuthor,
      img: "wild",
      ingr: recipeIngr ?? [],
    };
    console.log(recipeImg);
    console.log(final);
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
