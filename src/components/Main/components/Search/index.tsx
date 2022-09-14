import React, { FC } from 'react';
import { Filter } from './components/Filter';

import style from './search.module.scss';

export const Search: FC = () => {
	return (
		<section className={style.container}>
			<input placeholder="Поиск задач" className={style.input} />
			<Filter />
		</section>
	);
};
