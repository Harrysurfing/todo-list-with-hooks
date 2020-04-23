import React, { useState, useContext } from "react";
import TodoForm from "../todoform/todoform.component";

const TodoList = () => {
	const [input, setInput] = useState("");
	const [listItems, setListItems] = useState([]);

	return (
		<div>
			<input
				value={input}
				type="text"
				name="todoinput"
				onChange={(e) => {
					setInput(e.target.value);
					console.log(input);
				}}
			/>
			<button
				onClick={() => {
					setListItems(listItems.push(input));
					console.log(listItems);
				}}
			>
				Add
			</button>

			<TodoForm listItems={listItems} />
		</div>
	);
};

export default TodoList;
