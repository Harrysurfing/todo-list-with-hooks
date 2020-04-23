import React from "react";

import TodoItem from "../todoitem/todoitem.component";

const TodoForm = () => {
	return (
		<form>
			<ul>
				<TodoItem item="item" />
			</ul>
		</form>
	);
};

export default TodoForm;
