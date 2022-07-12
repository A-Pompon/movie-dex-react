import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "../redux/changeActive";

export const store = configureStore({
  reducer: { change: changeReducer },
});
