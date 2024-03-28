import Button from "@mui/material/Button";
import { Typography, TextField, IconButton } from "@mui/material";
import { Add, RemoveCircle } from "@mui/icons-material";

export default function CreateRecipes() {
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
          />
          <TextField
            label="Description"
            id="recipe-desc"
            multiline
            variant="standard"
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Author"
            id="recipe-author"
            variant="standard"
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Final Image"
            id="recipe-author"
            variant="standard"
            type="file"
            sx={{ marginBottom: "1rem" }}
          />
          <Typography variant="body1" gutterBottom>
            Ingredients
          </Typography>
          <hr className="mb-5" />
          <div>
            <Typography variant="subtitle1" gutterBottom>
              <IconButton>
                <RemoveCircle color="error" />
              </IconButton>
              Flour............................2 kg{" "}
            </Typography>
          </div>
          <div className="flex items-baseline mb-5">
            <TextField
              label="Ingredient"
              id="item-ingr"
              variant="standard"
              className="w-3/6 !mr-2"
            />
            <TextField
              label="Amount"
              id="item-amount"
              variant="standard"
              className="w-1/6 !mr-2"
            />
            <TextField
              label="Unit"
              id="item-unit"
              variant="standard"
              className="w-1/6 !mr-2"
            />
            <IconButton>
              <Add />
            </IconButton>
          </div>
          <Button variant="contained" size="small">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}
