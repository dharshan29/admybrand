import { Box, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Constant = () => {
	const [value, setValue] = useState(true);
	return (
		<Box>
			<Select value={value} onChange={(e) => setValue(e.target.value)}>
				<MenuItem value="true">True</MenuItem>
				<MenuItem value="false">False</MenuItem>
			</Select>
		</Box>
	);
};

export default Constant;
