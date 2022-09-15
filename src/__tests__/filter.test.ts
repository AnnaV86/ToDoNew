import { filterTodoList } from '../utils/filter';

describe('Функция filter, которая возвращает отфильтрованный массив', () => {
	const todoListAll = [
		{ id: '1', title: '', important: true, completed: true },
		{ id: '2', title: '', important: false, completed: true },
		{ id: '3', title: '', important: true, completed: false },
		{ id: '5', title: '', important: false, completed: false },
		{ id: '6', title: '', important: true, completed: true },
		{ id: '7', title: '', important: false, completed: true },
		{ id: '8', title: '', important: true, completed: false },
		{ id: '9', title: '', important: false, completed: false }
	];
	const resultImportant = [
		{ id: '1', title: '', important: true, completed: true },
		{ id: '3', title: '', important: true, completed: false },
		{ id: '6', title: '', important: true, completed: true },
		{ id: '8', title: '', important: true, completed: false }
	];
	const resultCompleted = [
		{ id: '1', title: '', important: true, completed: true },
		{ id: '2', title: '', important: false, completed: true },
		{ id: '6', title: '', important: true, completed: true },
		{ id: '7', title: '', important: false, completed: true }
	];
	const resultNotCompleted = [
		{ id: '3', title: '', important: true, completed: false },
		{ id: '5', title: '', important: false, completed: false },
		{ id: '8', title: '', important: true, completed: false },
		{ id: '9', title: '', important: false, completed: false }
	];

	test('Фильтр: Важные', () => {
		expect(filterTodoList('Важные', todoListAll)).toEqual(resultImportant);
	});
	test('Фильтр: Выполненные', () => {
		expect(filterTodoList('Выполненные', todoListAll)).toEqual(
			resultCompleted
		);
	});
	test('Фильтр: Невыполненные', () => {
		expect(filterTodoList('Невыполненные', todoListAll)).toEqual(
			resultNotCompleted
		);
	});
	test('Фильтр: Все', () => {
		expect(filterTodoList('Все', todoListAll)).toEqual(todoListAll);
	});
});
