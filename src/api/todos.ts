import { IToDo } from '../models';

export const getTodoListFetch = async (): Promise<IToDo[]> => {
	const response = await fetch('http://localhost:3010/todo');

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return await response.json();
};

export const addNewTodoFetch = async (newTodo: IToDo) => {
	const response = await fetch(`http://localhost:3010/todo`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(newTodo)
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return await response.json();
};

export const deleteTodoFetch = async (id: string) => {
	const response = await fetch(`http://localhost:3010/todo/${id}`, {
		method: 'DELETE'
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return await response.json();
};

export const updateTodoFetch = async (todo: IToDo) => {
	const response = await fetch(`http://localhost:3010/todo/${todo.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(todo)
	});

	return await response.json();
};
