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

export default function Shopping() {
  return (
    <div className="p-10 flex justify-between">
      <div className="w-1/2 flex flex-col">
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Shopping List
        </Typography>
        <List dense className="!pr-10">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
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
              primary="Single-line item"
              secondary="Secondary text"
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
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
              primary="Single-line item"
              secondary="Secondary text"
            />
          </ListItem>
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
            />
          </div>
          <div className="my-4">
            <TextField
              label="Amount"
              id="item-quantity"
              variant="standard"
              className="w-1/3 !mr-3"
            />
            <TextField
              label="Unit"
              id="item-unit"
              variant="standard"
              className="w-1/3"
            />
          </div>
          <Button variant="contained" size="small">
            Add to Shopping List
          </Button>
        </form>
      </div>
    </div>
  );
}
