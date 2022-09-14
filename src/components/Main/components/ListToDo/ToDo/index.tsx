import React, { FC } from 'react';
import { IToDo } from '../../../../../models';

import style from './toDo.module.scss';

interface ToDoProps {
	toDo: IToDo;
}

export const ToDo: FC<ToDoProps> = ({ toDo }) => {
	console.log(toDo);
	return (
		<li className={style.container}>
			<h3 className={style.title}>{toDo.title}</h3>
			<div className={style.buttons}>
				<button type="button" className={style.buttonImport}></button>
				<button type="button" className={style.buttonComplet}></button>
			</div>
		</li>
	);
};
