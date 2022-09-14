import React, { FC } from 'react';
import { IToDo } from '../../../../../models';
import todos from '../../../../../store/todos';

import style from './toDo.module.scss';

interface ToDoProps {
	toDo: IToDo;
}

export const ToDo: FC<ToDoProps> = React.memo(({ toDo }) => {
	console.log('render ToDo');
	const { id, title, important, completed } = toDo;
	const classImportantButton = important
		? style.buttonImportActive
		: style.buttonImport;
	const classCompletedButton = completed
		? style.buttonCompletedActive
		: style.buttonCompleted;

	const onClickDeleteTodo = () => {
		todos.deleteTodo(id);
	};

	const onClickImportantTodo = () => {
		const updateTodo = { ...toDo, important: !important };
		todos.updateTodo(updateTodo);
	};

	const onClickCompletedTodo = () => {
		const updateTodo = { ...toDo, completed: !completed };
		todos.updateTodo(updateTodo);
	};

	return (
		<li className={style.container}>
			<button
				type="button"
				className={classImportantButton}
				onClick={onClickImportantTodo}
			></button>
			<h3 className={style.title}>{title}</h3>
			<div className={style.buttons}>
				<button
					type="button"
					className={classCompletedButton}
					onClick={onClickCompletedTodo}
				></button>
				<button
					type="button"
					className={style.buttonDelete}
					onClick={onClickDeleteTodo}
				></button>
			</div>
		</li>
	);
});
