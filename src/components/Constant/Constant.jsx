import { Box, MenuItem, Select } from "@mui/material";
import React from "react";

const Constant = ({ value, handleChange }) => {
	return (
		<Box>
			<Select value={value} onChange={(e) => handleChange(e.target.value)}>
				<MenuItem value={true}>True</MenuItem>
				<MenuItem value={false}>False</MenuItem>
			</Select>
		</Box>
	);
};

export default Constant;
