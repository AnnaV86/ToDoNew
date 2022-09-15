import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import todos from '../../../../store/todos';
import style from './addToDo.module.scss';

export const AddToDo: FC = React.memo(() => {
	const [value, setValue] = useState('');

	const onChangeNewTodo = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setValue(evt.target.value);
	};

	const onClickAddTodo = () => {
		if (value) {
			const newTodo = {
				id: nanoid(),
				title: value,
				important: false,
				completed: false
			};
			todos.addTodo(newTodo);
			setValue('');
		}

		return;
	};

	return (
		<section className={style.container}>
			<input
				placeholder="Введи новую задачу"
				className={style.input}
				value={value}
				onChange={onChangeNewTodo}
			/>
			<button
				type="button"
				className={style.button}
				onClick={onClickAddTodo}
			>
				Добавить
			</button>
		</section>
	);
});
