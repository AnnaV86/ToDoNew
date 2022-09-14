import { getResponse } from '../utils';

export const getTodoListFetch = async () => {
	const response = await fetch('http://localhost:3010/toDo');
	return await getResponse(response);
};
