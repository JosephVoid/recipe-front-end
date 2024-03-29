import { Delete, RestaurantMenu } from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Recipe } from "../types";

export default function Shopping() {
  const [shopItems, setShopItems] = useState<Recipe["ingr"]>([]);
  const [ingName, setIngrName] = useState("");
  const [ingrAmount, setIngrAmount] = useState(0);
  const [ingrUnit, setIngrUnit] = useState("");

  function handleIngrAddition() {
    setShopItems([
      ...shopItems,
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
    setShopItems((shopItems) => shopItems.filter((ingr) => ingr.id !== id));
  }

  return (
    <div className="p-10 flex justify-between">
      <div className="w-1/2 flex flex-col">
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Shopping List
        </Typography>
        <List dense className="!pr-10">
          {shopItems.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleIngrRemoval(item.id)}
                >
                  <Delete />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <RestaurantMenu />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`${item.quantity} ${item.unit}`}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="w-1/2 flex flex-col">
        <Typography variant="h5" gutterBottom>
          Add Shopping Item
        </Typography>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              label="Ingredient Name"
              id="item-name"
              variant="standard"
              value={ingName}
              onChange={(e) => setIngrName(e.target.value)}
            />
          </div>
          <div className="my-4">
            <TextField
              label="Amount"
              id="item-quantity"
              variant="standard"
              className="w-1/3 !mr-3"
              type="number"
              value={ingrAmount}
              onChange={(e) => setIngrAmount(Number(e.target.value))}
            />
            <TextField
              label="Unit"
              id="item-unit"
              variant="standard"
              className="w-1/3"
              value={ingrUnit}
              onChange={(e) => setIngrUnit(e.target.value)}
            />
          </div>
          <Button variant="contained" size="small" onClick={handleIngrAddition}>
            Add to Shopping List
          </Button>
        </form>
      </div>
    </div>
  );
}
