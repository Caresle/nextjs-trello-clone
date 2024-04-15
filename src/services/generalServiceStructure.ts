import { generalError } from "@/helpers/errorsHandler";
import { get, post, put, del } from "@/lib/axios";
import { IGeneralService } from "@/types/services/generalService";

/**
 * Create the methods that shares all the services, the normal actions
 * are GET, POST, PUT, DELETE
 * @param route - {string }
 * @returns { IGeneralService }
 */
export const generateMapper = (route = ""): IGeneralService => {
	const data = {};
	for (const key of Object.keys(generalServiceStructure)) {
		(data as any)[key] = (payload = {}) =>
			(generalServiceStructure as any)[key](route, payload);
	}
	return data as IGeneralService;
};

export const generalServiceStructure = {
	get: async (route = "", params = {}) => {
		try {
			const res = await get(route, params);
			return res.data;
		} catch (error) {
			return generalError(error);
		}
	},
	createOrUpdate: async function (route = "", action = "", payload = {}) {
		if (action === this.post.name) return await this.post(route, payload);

		if (action === this.put.name) return await this.put(route, payload);

		return null;
	},
	post: async (route = "", payload = {}) => {
		try {
			return post(route, payload);
		} catch (error) {
			return generalError(error);
		}
	},
	put: async (route = "", payload = {}) => {
		try {
			return put(route, payload);
		} catch (error) {
			return generalError(error);
		}
	},
	remove: async (route = "", id = 0) => {
		try {
			const res = await del(route, { id });
			return res.data;
		} catch (error) {
			return generalError(error);
		}
	},
};
