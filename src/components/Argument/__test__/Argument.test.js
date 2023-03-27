import { render, fireEvent, screen } from "@testing-library/react";
import Argument from "../Argument";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Argument component", () => {
	const mockStore = configureStore([]);

	const initialState = {
		argument: {
			arg: [
				{ id: 1, name: "hello", value: true },
				{ id: 2, name: "name", value: true },
			],
		},
	};
	let store;

	beforeEach(() => {
		store = mockStore(initialState);
	});

	const MockArgument = () => {
		return (
			<Provider store={store}>
				<Argument />
			</Provider>
		);
	};

	test('add a new argument when the "+ add arg" button is clicked', () => {
		render(<MockArgument />);
		const addButton = screen.getByText("+ add arg");
		fireEvent.click(addButton);
		const argumentFields = screen.getAllByTestId(/testfield/i);
		expect(argumentFields).toHaveLength(2);
	});

	test("update argument name and value, when the user types in the corresponding input fields and changes select value", () => {
		render(<MockArgument />);
		const argumentFields = screen.getByTestId("testfield-1");
		const selectFields = screen.getByTestId("selectfield-1");
		fireEvent.change(argumentFields, { target: { value: "new name" } });
		fireEvent.change(selectFields, { target: { value: false } });
		expect(argumentFields.value).toBe("new name");
		expect(selectFields.value).toBe("false");
	});
});
