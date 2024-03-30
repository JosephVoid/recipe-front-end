import Typography from "@mui/material/Typography";
import { Recipe } from "../types";
import { Button, IconButton } from "@mui/material";
import { Delete, MenuBook } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addItem } from "../store/shoppingSlice";
import Cookies from "js-cookie";
import { deleteRecipes } from "../api";
import { useLocation } from "wouter";

export default function DisplayRecipe({
  data,
  onAdd,
  onDelete,
}: {
  data: Recipe;
  onAdd: () => void;
  onDelete: () => void;
}) {
  const dispatch = useDispatch();
  const [location, setLocation] = useLocation();

  function addToShoppingList() {
    data.ingr.forEach((ingredient) => {
      dispatch(
        addItem({
          id: ingredient.id,
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
        })
      );
    });
    onAdd();
  }

  function handleDelete(id: string) {
    deleteRecipes(id).then((result) => {
      if (result) onDelete();
    });
  }

  return (
    <div className="flex flex-col">
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        textAlign={"center"}
      >
        {data.title}
        {Cookies.get("user_id") === data.author_id && (
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(data._id)}
          >
            <Delete />
          </IconButton>
        )}
      </Typography>
      <img
        src={data.img}
        alt=""
        className="h-1/3 object-cover rounded-md mb-4"
      />
      <Typography variant="body1" gutterBottom>
        {data.desc}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        fontWeight="bold"
        className="flex justify-between items-center"
      >
        <div>
          <MenuBook className="mr-2" />
          Ingredients
        </div>
        <Button variant="contained" size="small" onClick={addToShoppingList}>
          Add to Shopping List
        </Button>
      </Typography>
      <hr className="mb-2" />
      {data.ingr.map((ingrids, idx) => (
        <Typography key={idx}>
          {ingrids.name}..............................{ingrids.quantity}{" "}
          {ingrids.unit}
        </Typography>
      ))}
    </div>
  );
}
