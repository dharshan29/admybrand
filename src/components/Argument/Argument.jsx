import { Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addArg,
	addValue,
	changeName,
} from "../../features/argument/argumentSlice";

const Argument = () => {
	const arg = useSelector((state) => state.argument.arg);
	const dispatch = useDispatch();

	const handleChange = (e, id) => {
		dispatch(changeName({ id: id, value: e.target.value }));
	};

	const handleArg = () => {
		dispatch(addArg(arg.length + 1));
	};

	const handleValue = (e, id) => {
		dispatch(addValue({ id: id, value: e.target.value }));
	};

	return (
		<Stack sx={{ width: "250px", gap: "20px" }}>
			<Box>
				{arg.map((item) => (
					<Stack sx={{ flexDirection: "row", gap: "5px" }} key={item.id}>
						<TextField
							id="outlined-basic"
							variant="outlined"
							value={item.name}
							onChange={(e) => handleChange(e, item.id)}
						/>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={item.value}
							label="Age"
							onChange={(e) => handleValue(e, item.id)}
						>
							<MenuItem value={true}>True</MenuItem>
							<MenuItem value={false}>False</MenuItem>
						</Select>
					</Stack>
				))}
			</Box>
			<Button variant="contained" onClick={handleArg}>
				+ add arg
			</Button>
		</Stack>
	);
};

export default Argument;
