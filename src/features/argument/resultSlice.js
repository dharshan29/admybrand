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
		// operatorsResult: (state, action) => {
		// 	const { value, operator } = action.payload;
		// 	console.log(value, operator);
		// 	const oldresult = state.result;
		// 	if (oldresult === undefined) {
		// 		state.result = value;
		// 	} else {
		// 		if (operator === "and") {
		// 			state.result = state.result && value;
		// 		} else if (operator === "or") {
		// 			state.result = state.result || value;
		// 		}
		// 	}
		// },
	},
});

export default resultSlice.reducer;
export const { addResult, operatorsResult } = resultSlice.actions;
