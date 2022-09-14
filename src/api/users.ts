import { getResponse } from '../utils';

export const getUsersFetch = async () => {
	const response = await fetch('http://localhost:3010/users');
	return await getResponse(response);
};
