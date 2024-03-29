import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
