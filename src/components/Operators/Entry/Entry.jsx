import { Box, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Constant from "../../Constant/Constant";
import SelArgument from "../../SelArgument/SelArgument";
import Operators from "../Operators";

const Entry = ({ entry, setOptions }) => {
	const [select, setSelect] = useState("");

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
			{select === "constant" && <Constant />}
			{select === "argument" && <SelArgument />}
			{select === "and" && (
				<Operators selected={select} handleChange={handleChange} />
			)}
		</Box>
	);
};

export default Entry;
