import React, { useState, useEffect } from "react";

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

	const [itemsToShow, setItemsToShow] = useState({
		showUnfinished: true,
		showFinished: true,
	});

	useEffect(() => {
		const mapValue = todos.map(({ text, complete }, index) => {
			if (itemsToShow.showFinished && itemsToShow.showUnfinished) {
				console.log(1);
				return (
					<div
						key={`1${index}`}
						style={{ textDecoration: complete ? "line-through" : "" }}
						onClick={() => togglefinish(index)}
					>
						{text}
					</div>
				);
			}
			if (!itemsToShow.showFinished && itemsToShow.showUnfinished) {
				console.log(2);
				return (
					<div
						key={`2${index}`}
						style={{ display: complete ? "none" : "static" }}
						onClick={() => togglefinish(index)}
					>
						{text}
					</div>
				);
			}
			if (itemsToShow.showFinished && !itemsToShow.showUnfinished) {
				console.log(3);
				return (
					<div
						key={`3${index}`}
						style={{
							display: complete ? "static" : "none",
							textDecoration: "line-through",
						}}
						onClick={() => togglefinish(index)}
					>
						{text}
					</div>
				);
			}
		});
		setContent(mapValue);
	}, [itemsToShow, todos]);

	const [content, setContent] = useState(null);

	return (
		<div className="App">
			<TodoList
				onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
			/>

			<div>{content}</div>
			<button onClick={removeDone}>Remove Finished Item</button>
			<button
				onClick={() =>
					setItemsToShow({ showFinished: true, showUnfinished: true })
				}
			>
				show all
			</button>
			<button
				onClick={() => {
					setItemsToShow({ showFinished: false, showUnfinished: true });
					console.log(todos);
				}}
			>
				show unfinished
			</button>
			<button
				onClick={() => {
					setItemsToShow({ showFinished: true, showUnfinished: false });
					console.log(todos);
				}}
			>
				show finished
			</button>
		</div>
	);
}

export default App;
