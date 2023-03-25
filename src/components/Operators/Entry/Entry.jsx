import { Box, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Constant from "../../Constant/Constant";
import SelArgument from "../../SelArgument/SelArgument";
import Operators from "../Operators";

const Entry = ({ entry, setOptions, oper, id, k }) => {
	const arg = useSelector((state) => state.argument.arg);
	const [select, setSelect] = useState("");

	const [value, setValue] = useState(true);
	const [argValue, setArgValue] = useState(arg[0].id);

	const handleChangeValue = (value) => {
		setValue(value);
	};

	const handleChangeArg = (value) => {
		setArgValue(value);
	};

	const handleChange = (e) => {
		setSelect(e.target.value);
		setOptions((prev) => {
			const index = prev.findIndex((item) => item.id === entry.id);
			const updatedItem = { ...prev[index], method: e.target.value };
			const updatedOptions = [...prev];
			updatedOptions[index] = updatedItem;
			return updatedOptions;
		});
	};

	useEffect(() => {
		if (entry.method === "constant") {
			setOptions((prev) => {
				const index = prev.findIndex((item) => item.id === entry.id);
				const updatedItem = { ...prev[index], value: value };
				const updatedOptions = [...prev];
				updatedOptions[index] = updatedItem;
				return updatedOptions;
			});
		}
	}, [entry.method, value]);

	useEffect(() => {
		const value = arg.find((item) => item.id === argValue)?.value;

		if (entry.method === "argument") {
			setOptions((prev) => {
				const index = prev.findIndex((item) => item.id === entry.id);
				const updatedItem = { ...prev[index], value: value };
				const updatedOptions = [...prev];
				updatedOptions[index] = updatedItem;
				return updatedOptions;
			});
		}
	}, [entry.method, argValue, arg]);

	return (
		<Box sx={{ width: "130px" }}>
			{select.length === 0 && (
				<Select
					id="simple-select"
					sx={{ width: "100%" }}
					value={select.length === 0 ? "Select" : select}
					onChange={handleChange}
				>
					<MenuItem disabled value="Select">
						<em>Select</em>
					</MenuItem>
					<MenuItem value="constant">Constant</MenuItem>
					<MenuItem value="argument">Argument</MenuItem>
					<MenuItem value="and">And</MenuItem>
					<MenuItem value="or">Or</MenuItem>
				</Select>
			)}
			{select === "constant" && (
				<Constant value={value} handleChange={handleChangeValue} />
			)}
			{select === "argument" && (
				<SelArgument value={argValue} handleChange={handleChangeArg} />
			)}
			{(select === "and" || select === "or") && (
				<Operators
					selected={select}
					handleChange={handleChange}
					method={oper}
					id={id + 1}
					k={k}
				/>
			)}
		</Box>
	);
};

export default Entry;
