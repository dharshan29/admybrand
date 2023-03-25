import { Box, Button, MenuItem, Select, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Entry from "./Entry/Entry";

const Operators = ({ selected, handleChange }) => {
	// const files = {
	// 	// children: [
	// 	// 	{
	// 	id: 1,
	// 	name: "add",
	// 	options: ["options1", "options2"],
	// 	// children: [{ name: "option1" }],
	// 	// 	},
	// 	// ],
	// };

	const option = [
		{ id: "1", method: "" },
		{ id: "2", method: "" },
	];

	const [options, setOptions] = useState(option);

	// const [result, setResult] = useState(undefined);

	// useEffect(() => {
	// 	options.forEach((item) => console.log(item.method));
	// }, [options]);

	const handleOptions = () => {
		setOptions([...options, { id: options.length + 1, method: "" }]);
	};

	const deleteOption = (id) => {
		const items = options.filter((item) => item.id !== id);
		setOptions(items);
	};

	return (
		<Stack flexDirection={"column"}>
			<Select
				sx={{ width: "130px" }}
				id="simple-select"
				value={selected.length === 0 ? "My Argument" : selected}
				onChange={handleChange}
			>
				<MenuItem disabled value="My Argument">
					<em>My Argument</em>
				</MenuItem>
				<MenuItem value="constant">Constant</MenuItem>
				<MenuItem value="argument">Argument</MenuItem>
				<MenuItem value="and">And</MenuItem>
				<MenuItem value="or">Or</MenuItem>
			</Select>
			<Box sx={{ marginLeft: "20px" }}>
				{options.map((entry) => (
					<Stack flexDirection="row" gap={1} marginBottom={1} key={entry.id}>
						<Entry entry={entry} setOptions={setOptions} />
						<Button
							sx={{ height: "fit-content" }}
							variant="contained"
							onClick={() => deleteOption(entry.id)}
						>
							x
						</Button>
					</Stack>
				))}
				<Button variant="contained" onClick={() => handleOptions()}>
					opt
				</Button>
			</Box>
		</Stack>
	);
};

export default Operators;
