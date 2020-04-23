import React, { useState } from "react";

const useInputValue = (initialValue) => {
	const [input, setInput] = useState(initialValue);

	return {
		input,
		onChange: (e) => setInput(e.target.value),
		clearText: () => setInput(""),
	};
};
const TodoList = ({ onSubmit }) => {
	const { clearText, ...text } = useInputValue("");

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(text.input);
					clearText();
				}}
			>
				<input value={text.input} onChange={text.onChange} />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default TodoList;
