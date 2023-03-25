import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SelArgument = () => {
	const arg = useSelector((state) => state.argument.arg);
	const [value, setValue] = useState(arg[0].id);

	return (
		<Select value={value} onChange={(e) => setValue(e.target.value)}>
			{arg.map((item) => (
				<MenuItem key={item.id} value={item.id}>
					{item.name}
				</MenuItem>
			))}
		</Select>
	);
};

export default SelArgument;
