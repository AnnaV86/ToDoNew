import { makeAutoObservable } from 'mobx';
import {
	addNewTodoFetch,
	deleteTodoFetch,
	getTodoListFetch,
	updateTodoFetch
} from '../api';
import { IToDo } from '../models';

class TodoListStore {
	todoList: IToDo[] = [];
	constructor() {
		makeAutoObservable(this);
	}

	async getTodo() {
		const result = await getTodoListFetch();
		if (result) {
			this.todoList = result;
		}
	}

	async addTodo(todo: IToDo) {
		const result = await addNewTodoFetch(todo);
		if (result) {
			this.todoList = this.todoList.concat(result);
		}
	}

	async deleteTodo(id: string) {
		const result = await deleteTodoFetch(id);
		if (result) {
			this.todoList = this.todoList.filter(todo => todo.id !== id);
		}
	}

	async updateTodo(todo: IToDo) {
		const result = await updateTodoFetch(todo);
		if (result) {
			this.todoList = this.todoList.map(oldTodo =>
				oldTodo.id === todo.id ? result : oldTodo
			);
		}
	}
}

export default new TodoListStore();
