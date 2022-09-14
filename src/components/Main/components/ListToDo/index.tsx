import React, { FC, useState } from 'react';
import { IToDo } from '../../../../models';

import style from './listToDo.module.scss';
import { ToDo } from './ToDo';

interface ListToDoProps {
	todoList: IToDo[];
}

export const ListToDo: FC<ListToDoProps> = ({ todoList }) => {
	console.log('render ListToDo');
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
