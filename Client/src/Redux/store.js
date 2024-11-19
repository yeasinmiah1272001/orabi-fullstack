import { configureStore } from "@reduxjs/toolkit";
import orabiSlice from "./orabiSlice";
export const store = configureStore({
  reducer: {
    orabi: orabiSlice,
  },
});
