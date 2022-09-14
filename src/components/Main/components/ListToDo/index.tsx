import React, { FC, useState } from 'react';
import { IToDo } from '../../../../models';

import style from './listToDo.module.scss';
import { ToDo } from './ToDo';

export const ListToDo: FC = () => {
	const [listToDo, setListToDo] = useState<IToDo[]>([
		{
			id: '1',
			title: 'Позавтракать',
			important: false,
			completed: true
		},
		{ id: '2', title: 'Работа', important: true, completed: true },
		{
			id: '3',
			title: 'Время с семьей - это очень длинное сообщение, которое не влезет в одну строчку',
			important: true,
			completed: false
		}
	]);

	return (
		<section className={style.wrapper}>
			<ul className={style.list}>
				{listToDo.map(toDo => (
					<ToDo key={toDo.id} toDo={toDo} />
				))}
			</ul>
		</section>
	);
};
