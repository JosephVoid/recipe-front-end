import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types";

const initialState: Recipe["ingr"] = [];

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Recipe["ingr"][number]>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((ingr) => ingr.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
