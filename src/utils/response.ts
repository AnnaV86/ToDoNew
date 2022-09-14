export const getResponse = (response: Response) => {
	try {
		if (!response.ok) {
			throw response.status;
		}
		return response.json();
	} catch (err) {
		return err;
	}
};
