import { configureStore } from "@reduxjs/toolkit";
import argumentReducer from "../features/argument/argumentSlice";
import resultReducer from "../features/argument/resultSlice";

export const store = configureStore({
	reducer: { argument: argumentReducer, result: resultReducer },
});
