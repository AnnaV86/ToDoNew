import React, { FC, useEffect } from 'react';
import { AddToDo } from './components/AddToDo';
import { ListToDo } from './components/ListToDo';
import { Search } from './components/Search';

import style from './main.module.scss';

export const Main: FC = () => {
	// useEffect(() => {

	// }, []);

	return (
		<main className={style.main}>
			<h1 className={style.title}>My ToDo</h1>
			<Search />
			<AddToDo />
			<ListToDo />
		</main>
	);
};
