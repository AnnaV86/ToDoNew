import React, { FC } from 'react';
import { IToDo } from '../../../../models';
import { ToDo } from './ToDo';
import style from './listToDo.module.scss';

interface ListToDoProps {
	todoList: IToDo[];
}

export const ListToDo: FC<ListToDoProps> = ({ todoList }) => {
	return (
		<section className={style.wrapper}>
			<ul className={style.list}>
				{todoList.map(toDo => (
					<ToDo key={toDo.id} toDo={toDo} />
				))}
			</ul>
		</section>
	);
};
