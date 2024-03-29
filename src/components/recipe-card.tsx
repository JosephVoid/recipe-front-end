import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Recipe } from "../types";

export default function RecipeCard({
  data,
  onView,
}: {
  data: Omit<Recipe, "ingr">;
  onView: () => void;
}) {
  return (
    <Card sx={{ maxWidth: 245, marginBottom: "2em" }}>
      <CardMedia sx={{ height: 140 }} image={data.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
        <Typography variant="subtitle1" component="div">
          By {data.author}
        </Typography>
      </CardContent>
      <CardActions onClick={onView}>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
