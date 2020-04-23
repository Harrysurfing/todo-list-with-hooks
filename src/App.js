import React, { useState } from "react";

import "./App.css";
import TodoList from "./component/todolist/todolist.component";

function App() {
	const [todos, setTodos] = useState([]);

	const togglefinish = (index) => {
		setTodos(
			todos.map((todo, idx) =>
				idx === index ? { ...todo, complete: !todo.complete } : todo
			)
		);
	};

	const removeDone = () => {
		setTodos(todos.filter((todo) => todo.complete === false));
	};

	return (
		<div className="App">
			<TodoList
				onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
			/>

			<div>
				{todos.map(({ text, complete }, index) => (
					<div
						key={index}
						style={{ textDecoration: complete ? "line-through" : "" }}
						onClick={() => togglefinish(index)}
					>
						{text}
					</div>
				))}
			</div>
			<button onClick={removeDone}>Remove Finished Item</button>
		</div>
	);
}

export default App;
