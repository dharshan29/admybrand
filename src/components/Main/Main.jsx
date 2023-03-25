import { Box, Button, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import Constant from "../Constant/Constant";
import Operators from "../Operators/Operators";
import SelArgument from "../SelArgument/SelArgument";

const Main = () => {
	const [selected, setSelected] = useState("");

	const handleChange = (e) => {
		setSelected(e.target.value);
	};

	return (
		<Box>
			{selected.length === 0 ? (
				<Select
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
			) : (
				<Stack sx={{ flexDirection: "row", gap: "5px" }}>
					{selected === "constant" && <Constant />}
					{selected === "argument" && <SelArgument />}
					{selected === "and" && (
						<Operators selected={selected} handleChange={handleChange} />
					)}
					{selected === "or" && <Operators />}
					<Button
						sx={{ height: "fit-content" }}
						variant="contained"
						onClick={() => setSelected("")}
					>
						x
					</Button>
				</Stack>
			)}
		</Box>
	);
};

export default Main;
