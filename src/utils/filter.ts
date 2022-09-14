import { IToDo } from '../models';
import todos from '../store/todos';

export const filterTodoList = (filter: string) => {
	const todoListAll: IToDo[] = todos.todoList;
	switch (filter) {
		case 'Важные':
			return todoListAll.filter(todo => todo.important);
		case 'Выполненные':
			return todoListAll.filter(todo => todo.completed);
		case 'Невыполненные':
			return todoListAll.filter(todo => !todo.completed);
		default:
			return todoListAll;
	}
};
