import React, { FC } from 'react';

import style from './filter.module.scss';

interface FilterProps {
	filteringTodoList: (filter: string) => void;
}
export const Filter: FC<FilterProps> = React.memo(({ filteringTodoList }) => {
	console.log('render Filter');
	const onClickFilter = (evt: React.MouseEvent<HTMLButtonElement>) => {
		const { name } = evt.currentTarget;
		filteringTodoList(name);
	};

	return (
		<>
			<section className={style.buttons}>
				<button type="button" onClick={onClickFilter} name="Важные">
					Важные
				</button>
				<button
					type="button"
					onClick={onClickFilter}
					name="Выполненные"
				>
					Выполненные
				</button>
				<button
					type="button"
					onClick={onClickFilter}
					name="Невыполненные"
				>
					Невыполненные
				</button>
				<button type="button" onClick={onClickFilter} name="Все">
					Все
				</button>
			</section>
		</>
	);
});
