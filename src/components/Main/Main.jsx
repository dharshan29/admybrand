import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResult } from "../../features/argument/resultSlice";
import Constant from "../Constant/Constant";
import Operators from "../Operators/Operators";
import SelArgument from "../SelArgument/SelArgument";

const Main = () => {
	const arg = useSelector((state) => state.argument.arg);
	const result = useSelector((state) => state.result.result);

	const dispatch = useDispatch();

	const [selected, setSelected] = useState("");
	const [value, setValue] = useState(true);

	const [argValue, setArgValue] = useState(arg[0].id);

	const handleChange = (e) => {
		setSelected(e.target.value);
	};

	const handleChangeValue = (value) => {
		setValue(value);
	};

	const handleChangeArg = (value) => {
		setArgValue(value);
	};

	useEffect(() => {
		if (selected === "constant") {
			dispatch(addResult(value));
		} else if (selected === "") {
			dispatch(addResult(undefined));
		} else if (selected === "argument") {
			const item = arg.find((item) => item.id === argValue)?.value;
			dispatch(addResult(item));
		}
	}, [selected, dispatch, value, arg, argValue]);

	useEffect(() => {}, [selected, setSelected]);

	return (
		<Stack flexDirection="column" gap={2} width="200px">
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
					{selected === "constant" && (
						<Constant value={value} handleChange={handleChangeValue} />
					)}
					{selected === "argument" && (
						<SelArgument value={argValue} handleChange={handleChangeArg} />
					)}
					{(selected === "and" || selected === "or") && (
						<Operators
							selected={selected}
							handleChange={handleChange}
							method="none"
							id={1}
							k={undefined}
						/>
					)}
					<Button
						sx={{ height: "fit-content" }}
						variant="contained"
						onClick={() => setSelected("")}
					>
						x
					</Button>
				</Stack>
			)}
			<Typography variant="h5">
				result:{" "}
				{result === undefined
					? "undefined"
					: result === true
					? "true"
					: "false"}
			</Typography>
		</Stack>
	);
};

export default Main;
