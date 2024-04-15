import { generalError } from "@/helpers/errorsHandler";
import { get, post, put, del } from "@/lib/axios";

const BASE_ROUTE = "/user";

export const __userService = {
	get: async (params = {}) => {
		try {
			const res = await get(BASE_ROUTE, params);
			return res.data;
		} catch (error) {
			return generalError(error);
		}
	},
	createOrUpdate: async function (action = "", payload = {}) {
		if (action === this.post.name) return await this.post(payload);

		if (action === this.put.name) return await this.put(payload);

		return null;
	},
	post: async (payload = {}) => {
		try {
			return post(BASE_ROUTE, payload);
		} catch (error) {
			return generalError(error);
		}
	},
	put: async (payload = {}) => {
		try {
			return put(BASE_ROUTE, payload);
		} catch (error) {
			return generalError(error);
		}
	},
	removeUser: async (id = 0) => {
		try {
			const res = await del(BASE_ROUTE, { id });
			return res.data;
		} catch (error) {
			return generalError(error);
		}
	},
};
