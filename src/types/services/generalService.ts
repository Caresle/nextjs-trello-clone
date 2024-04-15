export interface IGeneralService {
	get: (params: {}) => any | null;
	createOrUpdate: (action: string, payload: {}) => any | null;
	post: (payload: {}) => any | null;
	put: (payload: {}) => any | null;
	remove: (id: number) => any | null;
}
