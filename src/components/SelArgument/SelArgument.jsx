import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const SelArgument = ({ value, handleChange }) => {
	const arg = useSelector((state) => state.argument.arg);

	return (
		<Select value={value} onChange={(e) => handleChange(e.target.value)}>
			{arg.map((item) => (
				<MenuItem key={item.id} value={item.id}>
					{item.name}
				</MenuItem>
			))}
		</Select>
	);
};

export default SelArgument;
