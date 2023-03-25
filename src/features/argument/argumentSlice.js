import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	arg: [{ name: "myarg", value: false, id: 1 }],
};

export const argumentSlice = createSlice({
	name: "argument",
	initialState,
	reducers: {
		addArg: (state, action) => {
			const id = action.payload;
			state.arg.push({ name: "myarg", value: true, id: id });
		},
		changeName: (state, action) => {
			const { id, value } = action.payload;
			let item = state.arg.find((item) => item.id === id);
			item.name = value;
		},
		addValue: (state, action) => {
			const { id, value } = action.payload;
			let item = state.arg.find((item) => item.id === id);
			item.value = value;
		},
	},
});

export default argumentSlice.reducer;
export const { addArg, changeName, addValue } = argumentSlice.actions;
