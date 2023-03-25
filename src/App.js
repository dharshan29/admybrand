import { Stack } from "@mui/material";
import React from "react";
import "./App.css";
import Argument from "./components/Argument/Argument";
import Main from "./components/Main/Main";

function App() {
	return (
		<Stack sx={{ gap: "30px" }}>
			<Argument />
			<Main />
		</Stack>
	);
}

export default App;
