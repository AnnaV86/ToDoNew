import React, { FC } from 'react';

import style from './addToDo.module.scss';

export const AddToDo: FC = () => {
	return (
		<section className={style.container}>
			<input placeholder="Введи новую задачу" className={style.input} />
			<button type="button" className={style.button}>
				Добавить
			</button>
		</section>
	);
};
