import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	result: undefined,
};

export const resultSlice = createSlice({
	name: "result",
	initialState,
	reducers: {
		addResult: (state, action) => {
			state.result = action.payload;
		},
	},
});

export default resultSlice.reducer;
export const { addResult } = resultSlice.actions;
