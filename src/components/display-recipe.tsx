import Typography from "@mui/material/Typography";
import { Recipe } from "../types";
import { Button, CardMedia } from "@mui/material";
import { MenuBook, Restaurant } from "@mui/icons-material";

export default function DisplayRecipe({ data }: { data: Recipe }) {
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
        <Button variant="contained" size="small">
          Add to Shopping List
        </Button>
      </Typography>
      <hr className="mb-2" />
      {data.ingr.map((ingrids) => (
        <Typography>
          {ingrids.name}..............................{ingrids.quantity}{" "}
          {ingrids.unit}
        </Typography>
      ))}
    </div>
  );
}
