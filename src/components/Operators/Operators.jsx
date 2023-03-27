import { Box, Button, MenuItem, Select, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addResult } from "../../features/argument/resultSlice";
import Entry from "./Entry/Entry";

const andOperation = (arr) => {
	let result = true;
	let validValues = 0;
	if (arr.length === 0) {
		return undefined;
	}
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i]?.value;
		if (value === undefined || value === "") {
			continue;
		}
		validValues++;
		result = result && value;
	}
	if (validValues === 0) {
		return undefined;
	}
	return result;
};

const orOperation = (arr) => {
	let result = false;
	let validValues = 0;
	if (arr.length === 0) {
		return undefined;
	}
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i]?.value;
		if (value === undefined || value === "") {
			continue; // skip empty or undefined values
		}
		validValues++;
		result = result || value;
	}
	if (validValues === 0) {
		return undefined;
	}

	return result;
};

const Operators = ({ selected, handleChange, method, id, k }) => {
	const option = [
		{ id: 1, method: "", value: "" },
		{ id: 2, method: "", value: "" },
	];

	const dispatch = useDispatch();

	const [options, setOptions] = useState(option);
	const [result, setResult] = useState(undefined);

	useEffect(() => {
		if (selected === "and") {
			setResult(andOperation(options));
		} else if (selected === "or") {
			setResult(orOperation(options));
		}
	}, [options, selected]);

	const handleOptions = () => {
		setOptions([...options, { id: options.length + 1, method: "", value: "" }]);
	};

	const deleteOption = (id) => {
		const items = options.filter((item) => item.id !== id);
		setOptions(items);
	};

	// let j =
	// method === "none" ? result : method === "and" ? k && result : k || result;

	let j =
		method === "none"
			? result
			: method === "and"
			? result === undefined
				? k
				: k && result
			: result === undefined
			? k
			: k || result;

	dispatch(addResult(j));

	useEffect(() => {
		dispatch(addResult(j));
	}, [j, k, dispatch, result, method]);

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
						<Entry
							entry={entry}
							setOptions={setOptions}
							oper={selected}
							id={id}
							k={j}
						/>
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
