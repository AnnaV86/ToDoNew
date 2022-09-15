import { IToDo } from '../models';

export const filterTodoList = (filter: string, todoList: IToDo[]) => {
	switch (filter) {
		case 'Важные':
			return todoList.filter(todo => todo.important);
		case 'Выполненные':
			return todoList.filter(todo => todo.completed);
		case 'Невыполненные':
			return todoList.filter(todo => !todo.completed);
		default:
			return todoList;
	}
};
