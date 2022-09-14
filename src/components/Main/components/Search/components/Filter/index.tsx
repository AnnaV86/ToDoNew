import React, { FC } from 'react';

import style from './filter.module.scss';

export const Filter: FC = () => {
	return (
		<>
			<section className={style.buttons}>
				<button
					type="button"

				>
					Важные
				</button>
				<button
					type="button"

				>
					Выполненные
				</button>
				<button type="button">Все</button>
			</section>
		</>
	);
};
