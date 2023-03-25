import { configureStore } from "@reduxjs/toolkit";
import argumentReducer from "../features/argument/argumentSlice";

export const store = configureStore({
	reducer: { argument: argumentReducer },
});
