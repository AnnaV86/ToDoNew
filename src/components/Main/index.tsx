import React, { FC, useCallback, useEffect, useState } from 'react';
import { AddToDo } from './components/AddToDo';
import { ListToDo } from './components/ListToDo';
import { observer } from 'mobx-react-lite';
import todos from '../../store/todos';
import style from './main.module.scss';
import { filterTodoList } from '../../utils/filter';
import { IToDo } from '../../models/todo';
import { Filter } from './components/Filter';

export const Main: FC = observer(() => {
	console.log('render Main');
	const [listTodo, setListTodo] = useState<IToDo[]>([]);

	const filteringTodoList = useCallback((filter: string) => {
		const TodoFilter = filterTodoList(filter);
		setListTodo(TodoFilter);
	}, []);

	useEffect(() => {
		setListTodo(todos.todoList);
	}, [todos.todoList]);
	useEffect(() => {
		(async () => {
			await todos.getTodo();
			setListTodo(todos.todoList);
		})();
	}, []);

	return (
		<main className={style.main}>
			<h1 className={style.title}>My ToDo</h1>
			<Filter filteringTodoList={filteringTodoList} />
			<AddToDo />
			<ListToDo todoList={listTodo} />
		</main>
	);
});
