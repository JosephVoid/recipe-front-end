import Typography from "@mui/material/Typography";
import { Recipe } from "../types";
import { Button } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addItem } from "../store/shoppingSlice";

export default function DisplayRecipe({
  data,
  onAdd,
}: {
  data: Recipe;
  onAdd: () => void;
}) {
  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col">
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        textAlign={"center"}
      >
        {data.title}
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
